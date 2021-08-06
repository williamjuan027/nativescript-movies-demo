import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  Animation,
  AnimationDefinition,
  CoreTypes,
  Page,
} from "@nativescript/core";
import { IProfile } from "~/core";

@Component({
  moduleId: module.id,
  selector: "ns-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent {
  @ViewChild("front") front: ElementRef;
  @ViewChild("back") back: ElementRef;

  profileData: IProfile = {
    displayName: "Luca Giraffe",
    username: "mrtallguy",
    posts: 15,
    followers: 200,
    following: 150,
    bio: "I like Shark Movies",
    recentActivities: [
      {
        type: "reviewed",
        message: 'Added Movie review for "Sharknado"',
      },
      {
        type: "watched",
        message: 'Watched "Jaws"',
      },
      {
        type: "liked",
        message: 'Liked "Deep Blue Sea"',
      },
      {
        type: "watched",
        message: 'Watched "Deep Blue Sea"',
      },
    ],
  };

  private editMode = false;

  constructor(private page: Page) {
    this.page.actionBarHidden = true;
  }

  backLoaded(): void {
    this.initializeCards();
  }

  onEdit(): void {
    if (!this.editMode) {
      this.flipToBack().then(() => {
        this.editMode = true;
      });
    }
  }

  onSave(): void {
    if (this.editMode) {
      this.flipToFront().then(() => {
        this.editMode = false;
      });
    }
  }

  private flipToBack(): Promise<void> {
    this.back.nativeElement.visibility = "visible";
    return this.getFlipToBackAnimation(500)
      .play()
      .then(() => {
        this.front.nativeElement.visibility = "collapse";
      });
  }

  private flipToFront(): Promise<void> {
    this.front.nativeElement.visibility = "visible";
    return this.getFlipToFrontAnimation(500)
      .play()
      .then(() => {
        this.back.nativeElement.visibility = "collapse";
      });
  }

  private initializeCards(): void {
    if (this.back && this.back.nativeElement) {
      // rotate and hide back side
      this.back.nativeElement.rotateX = 180;
      this.back.nativeElement.opacity = 0;
      this.back.nativeElement.visibility = "collapse";
    }
  }

  private getFlipToBackAnimation(animationDuration: number): Animation {
    const animationDefinition: AnimationDefinition[] = [
      {
        target: this.front.nativeElement,
        rotate: { x: -180, y: 0, z: 0 },
        duration: animationDuration,
        curve: CoreTypes.AnimationCurve.easeInOut,
      },
      {
        target: this.back.nativeElement,
        rotate: { x: 0, y: 0, z: 0 },
        duration: animationDuration,
        curve: CoreTypes.AnimationCurve.easeInOut,
      },
      {
        target: this.front.nativeElement,
        opacity: 0,
        delay: animationDuration / 2,
        duration: 1,
      },
      {
        target: this.back.nativeElement,
        opacity: 1,
        delay: animationDuration / 2,
        duration: 1,
      },
    ];
    return new Animation(animationDefinition, false);
  }

  private getFlipToFrontAnimation(animationDuration: number): Animation {
    const animationDefinition: AnimationDefinition[] = [
      {
        target: this.front.nativeElement,
        rotate: { x: 0, y: 0, z: 0 },
        duration: animationDuration,
        curve: CoreTypes.AnimationCurve.easeInOut,
      },
      {
        target: this.back.nativeElement,
        rotate: { x: 180, y: 0, z: 0 },
        duration: animationDuration,
        curve: CoreTypes.AnimationCurve.easeInOut,
      },
      {
        target: this.front.nativeElement,
        opacity: 1,
        delay: animationDuration / 2,
        duration: 1,
      },
      {
        target: this.back.nativeElement,
        opacity: 0,
        delay: animationDuration / 2,
        duration: 1,
      },
    ];
    return new Animation(animationDefinition, false);
  }
}
