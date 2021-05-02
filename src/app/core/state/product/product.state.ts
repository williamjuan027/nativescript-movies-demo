import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import {
  State,
  Action,
  StateContext,
  Selector,
  createSelector,
} from "@ngxs/store";
import { ApiService, ICategory, IProductGroup } from "@app/core";
import { Product } from "./product.actions";
import { ProductStateModel } from "./product.model";
import categories from "../../../../assets/local-data/categories.json";
import productGroups from "../../../../assets/local-data/productGroups.json";

@State<ProductStateModel>({
  name: "product",
  defaults: {
    categories: <ICategory[]>categories.categories,
    productGroups: <IProductGroup[]>productGroups.productGroups,
  },
})
@Injectable()
export class ProductState {
  constructor(private apiService: ApiService) {}

  @Action(Product.LoadCategories)
  loadCategories(
    ctx: StateContext<ProductStateModel>,
    action: Product.LoadCategories
  ) {
    const state = ctx.getState();
    return this.apiService.getCategories$(action.url).pipe(
      tap((categories: ICategory[]) => {
        ctx.setState({
          ...state,
          categories: categories,
        });
      }),
      catchError((err) => {
        console.log("error loading categories", err);
        return of(err);
      })
    );
  }

  @Action(Product.LoadProductGroups)
  loadProductGroups(
    ctx: StateContext<ProductStateModel>,
    action: Product.LoadProductGroups
  ) {
    const state = ctx.getState();
    return this.apiService.getProductGroups$(action.url).pipe(
      tap((productGroups: IProductGroup[]) => {
        ctx.setState({
          ...state,
          productGroups: productGroups,
        });
      }),
      catchError((err) => {
        console.log("error loading product groups", err);
        return of(err);
      })
    );
  }

  @Selector()
  static categories(state: ProductStateModel) {
    return state.categories;
  }

  @Selector()
  static productGroups(state: ProductStateModel) {
    // filter out featured temporarily
    return (
      state.productGroups?.filter((group) => group.groupKey !== "featured") ||
      []
    );
  }

  @Selector()
  static featuredProduct(state: ProductStateModel) {
    return (
      state.productGroups?.find((group) => group.groupKey === "featured")
        ?.products?.[0] || undefined
    );
  }

  static productById(productId: number) {
    return createSelector([ProductState], (state: ProductStateModel) => {
      return state.productGroups
        .reduce((products, productGroups) => {
          products.push(...productGroups.products);
          return products;
        }, [])
        .find((product) => product.id === productId);
    });
  }
}
