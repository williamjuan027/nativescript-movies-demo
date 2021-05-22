import { Component, ElementRef, ViewChild } from "@angular/core";
import { JsAnimationService, LayersService } from "@app/core";
import { EventData, View } from "@nativescript/core";
import { Subject } from "rxjs";
import {
  distinctUntilChanged,
  map,
  skipWhile,
  takeUntil,
} from "rxjs/operators";

@Component({
  moduleId: module.id,
  selector: "ns-alert-popup",
  templateUrl: "alert-popup.component.html",
})
export class AlertPopupComponent {
  _popupContainer: View;
  private _isAnimating = false;
  private _alertIsOpen = false;
  private _destroy$ = new Subject();
  constructor(
    private layersService: LayersService,
    private jsAnimationService: JsAnimationService
  ) {}

  ngOnInit(): void {
    this.layersService
      .getLayers$()
      .pipe(
        map((layers) => layers.alertPopup.isOpen),
        skipWhile((isOpen) => isOpen === this._alertIsOpen),
        distinctUntilChanged(),
        takeUntil(this._destroy$)
      )
      .subscribe((isOpen) => {
        if (isOpen) {
          this._animateOpen();
        } else {
          this._animateClose();
        }
      });
  }

  ngDoCheck() {
    // without calling popmotion outside of Angular Zone, this will be triggered multiple times
    // uncomment next line to see that in effect
    // console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  popupContainerLoaded(args: EventData): void {
    this._popupContainer = args.object as View;
    this._popupContainer.visibility = "collapsed";
  }

  close(): void {
    if (this._isAnimating) {
      return;
    }
    this.layersService.closeAlertPopup();
  }

  animateStretch() {
    if (this._popupContainer) {
      if (this._isAnimating) {
        return;
      }
      this._isAnimating = true;
      this.jsAnimationService
        .animateStretch(this._popupContainer)
        .then(() => {
          this._isAnimating = false;
        })
        .catch((err) => {
          this._isAnimating = false;
        });
    }
  }

  private _animateOpen(): void {
    this._popupContainer.scaleX = 0;
    this._popupContainer.scaleY = 0;
    this._popupContainer.opacity = 0;
    this._popupContainer.visibility = "visible";
    this.jsAnimationService
      .animateWithPopmotion(
        "0,0,0",
        "1.1,1.1,1",
        (latest) => {
          const [scaleX, scaleY, opacity] = latest
            .split(",")
            .map((val) => +val);
          this._popupContainer.scaleX = scaleX;
          this._popupContainer.scaleY = scaleY;
          this._popupContainer.opacity = opacity;
        },
        200
      )
      .then(() => {
        this.jsAnimationService
          .animateSpringWithPopmotion(
            "1.1,1.1",
            "1,1",
            (latest) => {
              const [scaleX, scaleY] = latest.split(",").map((val) => +val);
              this._popupContainer.scaleX = scaleX;
              this._popupContainer.scaleY = scaleY;
            },
            1000
          )
          .then(() => {
            this._alertIsOpen = true;
          });
      });
  }

  private _animateClose(): void {
    this.jsAnimationService
      .animateWithPopmotion(
        "1,1,1",
        "0,0,0",
        (latest) => {
          const [scaleX, scaleY, opacity] = latest
            .split(",")
            .map((val) => +val);
          this._popupContainer.scaleX = scaleX;
          this._popupContainer.scaleY = scaleY;
          this._popupContainer.opacity = opacity;
        },
        200
      )
      .then(() => {
        this._popupContainer.visibility = "collapsed";
        this._alertIsOpen = false;
      });
  }
}
