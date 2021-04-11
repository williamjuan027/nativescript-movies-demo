import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Select, Store } from "@ngxs/store";
import {
  DataService,
  Icons,
  LayersService,
  Config,
  SlideUpFadeStagger,
  ConfigState,
} from "@app/core";
import { Page } from "@nativescript/core";

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

  constructor(private store: Store) {
    this.store.selectOnce(ConfigState.dataUrl).subscribe((stateDataUrl) => {
      this.dataUrl = stateDataUrl;
    });
    this.store
      .selectOnce(ConfigState.stylingUrl)
      .subscribe((stateStylingUrl) => {
        this.stylingUrl = stateStylingUrl;
      });
  }

  updateUrls(): void {
    if (this.dataUrl) {
      this.store.dispatch(new Config.UpdateDataUrl(this.dataUrl));
    }
    if (this.stylingUrl) {
      this.store.dispatch(new Config.UpdateStylingUrl(this.stylingUrl));
    }
  }
}
