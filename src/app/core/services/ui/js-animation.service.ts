import { Injectable, NgZone } from "@angular/core";
import { View } from "@nativescript/core";
import { animate as popmotionAnimate } from "popmotion";

@Injectable({
  providedIn: "root",
})
export class JsAnimationService {
  constructor(private zone: NgZone) {}
  animateWithPopmotion(
    from: string,
    to: string,
    onUpdate: (latest: string) => void,
    duration: number
  ): Promise<void> {
    return new Promise((resolve) => {
      this.zone.runOutsideAngular(() => {
        popmotionAnimate({
          from: from,
          to: to,
          duration: duration,
          onUpdate: (latest) => onUpdate(latest),
          onComplete: () => resolve(),
        });
      });
    });
  }

  animateSpringWithPopmotion(
    from: string,
    to: string,
    onUpdate: (latest: string) => void,
    duration: number,
    damping: number = 10,
    stiffness: number = 700
  ): Promise<void> {
    return new Promise((resolve) => {
      this.zone.runOutsideAngular(() => {
        popmotionAnimate({
          from: from,
          to: to,
          duration: duration,
          damping: damping,
          stiffness: stiffness,
          type: "spring",
          onUpdate: (latest) => onUpdate(latest),
          onComplete: () => resolve(),
        });
      });
    });
  }

  animateStretch(view: View): Promise<void> {
    return this.animateWithPopmotion(
      "1,1",
      "1.2,0.8",
      (latest) => {
        const [scaleX, scaleY] = latest.split(",").map((val) => +val);
        view.scaleX = scaleX;
        view.scaleY = scaleY;
      },
      200
    ).then(() => {
      this.animateSpringWithPopmotion(
        "1.2,0.8",
        "1,1",
        (latest) => {
          const [scaleX, scaleY] = latest.split(",").map((val) => +val);
          view.scaleX = scaleX;
          view.scaleY = scaleY;
        },
        1000
      );
    });
    // this.zone.runOutsideAngular(() => {
    //   popmotionAnimate({
    //     from: "1,1",
    //     to: "1.2,0.8",
    //     duration: 200,
    //     onUpdate: (latest) => {
    //       const [scaleX, scaleY] = latest.split(",").map((val) => +val);
    //       view.scaleX = scaleX;
    //       view.scaleY = scaleY;
    //     },
    //     onComplete: () => {
    //       popmotionAnimate({
    //         from: "1.2,0.8",
    //         to: "1, 1",
    //         duration: 1000,
    //         stiffness: 700,
    //         damping: 10,
    //         type: "spring",
    //         onUpdate: (latest) => {
    //           const [scaleX, scaleY] = latest.split(",").map((val) => +val);
    //           view.scaleX = scaleX;
    //           view.scaleY = scaleY;
    //         },
    //         onComplete: () => {
    //           resolve();
    //         },
    //         onStop: () => {
    //           resolve();
    //         },
    //       });
    //     },
    //     onStop: () => {
    //       resolve();
    //     },
    //   });
    // });
    // });
  }
}
