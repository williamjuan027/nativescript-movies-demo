import { Component } from "@angular/core";
import { tap, map, switchMap } from "rxjs/operators";
import { Store } from "@ngxs/store";
import {
  LayersService,
  Icons,
  NavigationService,
  Routes,
  ProductState,
} from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-quickview-bottomsheet",
  templateUrl: "quickview-bottomsheet.component.html",
})
export class QuickviewBottomsheetComponent {
  state$ = this.layersService
    .getLayers$()
    .pipe(map((layers) => layers.quickviewBottomsheet));

  productDetails$ = this.state$.pipe(
    map((state) => state.productId),
    tap((productId) => (this._productId = productId)),
    switchMap((productId) =>
      this.store.select(ProductState.productById(productId))
    )
  );

  icons = Icons;
  private _productId: number;

  constructor(
    private store: Store,
    private layersService: LayersService,
    private navigationService: NavigationService
  ) {}

  close(): void {
    this.layersService.closeQuickviewBottomsheet();
  }

  navigateToProductDetails(): void {
    this.navigationService.navigate(Routes.details, { id: this._productId });
    this.close();
  }
}
