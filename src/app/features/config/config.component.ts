import { Component } from "@angular/core";
import { Page } from "@nativescript/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Select, Store } from "@ngxs/store";
import { Config, SlideUpFadeStagger, ConfigState, Icons } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-config",
  templateUrl: "config.component.html",
  animations: [SlideUpFadeStagger],
})
export class ConfigComponent {
  @Select(ConfigState.staticText) staticText$;
  @Select(ConfigState.styleOptions) styleOptions$;
  @Select(ConfigState.stylingUrl) stylingUrl$;
  dataUrl;
  stylingUrl;
  displayCustomStyleTextfield = false;
  icon = Icons;

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
    this.store.dispatch(new Config.UpdateStyleOptions());
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  toggleCustomStyle(): void {
    this.displayCustomStyleTextfield = !this.displayCustomStyleTextfield;
  }

  updateStylingUrl(url: string): void {
    this.store.dispatch(new Config.UpdateStylingUrl(url));

    // hide custom textfield
    this.displayCustomStyleTextfield = false;
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
