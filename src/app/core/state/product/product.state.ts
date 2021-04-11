import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Product } from "./product.actions";
import { ProductStateModel } from "./product.model";

@State<ProductStateModel>({
  name: "product",
  defaults: {
    categories: [], // TODO: add fallback here?
    productGroups: [],
  },
})
@Injectable()
export class ProductState {
  //   @Action(Config.UpdateDataUrl)
  //   updateDataUrl(
  //     ctx: StateContext<ConfigStateModel>,
  //     action: Config.UpdateDataUrl
  //   ) {
  //     const state = ctx.getState();
  //     ctx.setState({
  //       ...state,
  //       dataUrl: action.url,
  //     });
  //   }
  //   @Action(Config.UpdateStylingUrl)
  //   updateStylingUrl(
  //     ctx: StateContext<ConfigStateModel>,
  //     action: Config.UpdateStylingUrl
  //   ) {
  //     const state = ctx.getState();
  //     ctx.setState({
  //       ...state,
  //       stylingUrl: action.url,
  //     });
  //   }
  //   @Selector()
  //   static dataUrl(state: ConfigStateModel) {
  //     return state.dataUrl;
  //   }
  //   @Selector()
  //   static stylingUrl(state: ConfigStateModel) {
  //     return state.stylingUrl;
  //   }
}
