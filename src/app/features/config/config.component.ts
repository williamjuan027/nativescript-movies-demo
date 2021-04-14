import { Component } from "@angular/core";
import { Page } from "@nativescript/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Select, Store } from "@ngxs/store";
import { Config, SlideUpFadeStagger, ConfigState } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-config",
  templateUrl: "config.component.html",
  animations: [SlideUpFadeStagger],
})
export class ConfigComponent {
  @Select(ConfigState.staticText) staticText$;
  dataUrl;
  stylingUrl;

  private _destroy$ = new Subject();
  constructor(private page: Page, private store: Store) {
    this.page.actionBarHidden = true;
    this.store
      .select(ConfigState.dataUrl)
      .pipe(takeUntil(this._destroy$))
      .subscribe((stateDataUrl) => {
        this.dataUrl = stateDataUrl;
      });
    this.store
      .select(ConfigState.stylingUrl)
      .pipe(takeUntil(this._destroy$))
      .subscribe((stateStylingUrl) => {
        this.stylingUrl = stateStylingUrl;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  updateUrls(): void {
    this.store
      .dispatch(new Config.UpdateDataUrl(this.dataUrl))
      .toPromise()
      .then(() => {
        this.store.dispatch(new Config.UpdateStylingUrl(this.stylingUrl));
      });
  }
}
