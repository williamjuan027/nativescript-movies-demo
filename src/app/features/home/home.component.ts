import { Component } from "@angular/core";
import { Page, isIOS } from "@nativescript/core";
import { Select } from "@ngxs/store";
import {
  ConfigState,
  ProductState,
  Icons,
  LayersService,
  SlideUpFadeStagger,
} from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
  animations: [SlideUpFadeStagger],
})
export class HomeComponent {
  @Select(ConfigState.staticText) staticText$;
  @Select(ProductState.categories) categories$;
  @Select(ProductState.productGroups) productGroups$;
  @Select(ProductState.featuredProduct) featuredProduct$;
  ios = isIOS;

  headerRightActionButton = {
    icon: Icons.search,
    onTap: () => this.layersService.openSearchBottomsheet(),
  };

  constructor(private page: Page, private layersService: LayersService) {
    this.page.actionBarHidden = true;
  }

  openProductDetails(id: number): void {
    this.layersService.openQuickviewBottomsheet(id);
  }

  openAlertPopup(): void {
    this.layersService.openAlertPopup();
  }
}
