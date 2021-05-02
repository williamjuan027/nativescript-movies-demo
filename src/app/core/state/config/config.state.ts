import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import { catchError, tap } from "rxjs/operators";
import { ApiService, StylingService } from "@app/core";
import { Config } from "./config.actions";
import { ConfigStateModel } from "./config.model";
import { of } from "rxjs";
import { Product } from "../product";

@State<ConfigStateModel>({
  name: "config",
  defaults: {
    // sample data urls:
    // default: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/data/default/
    // travel: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/data/travel/
    // indo: https://raw.githubusercontent.com/williamjuan027/movies-app-api/translate/indo/data/
    dataUrl: "",
    // sample styling urls:
    // default: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/primary.css
    // greenish: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/greenish.css
    // spotify: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/spotify.css
    // netflix: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/netflix.css
    // airbnb: https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/airbnb.css
    stylingUrl: "",
    styleOptions: [],
    staticText: undefined,
  },
})
@Injectable()
export class ConfigState {
  constructor(
    private apiService: ApiService,
    private stylingService: StylingService,
    private store: Store
  ) {}

  @Action(Config.UpdateDataUrl)
  updateDataUrl(
    ctx: StateContext<ConfigStateModel>,
    action: Config.UpdateDataUrl
  ) {
    const state = ctx.getState();
    if (action.url) {
      ctx.setState({
        ...state,
        dataUrl: action.url,
      });

      // TODO: there is a race condition if the dispatch happens at the same time
      this.store
        .dispatch(new Product.LoadCategories(action.url))
        .toPromise()
        .then(() =>
          this.store.dispatch(new Product.LoadProductGroups(action.url))
        );
      return ctx.dispatch([new Config.UpdateStaticText()]);
    }
  }

  @Action(Config.UpdateStylingUrl)
  updateStylingUrl(
    ctx: StateContext<ConfigStateModel>,
    action: Config.UpdateStylingUrl
  ) {
    const state = ctx.getState();
    if (action.url) {
      ctx.setState({
        ...state,
        stylingUrl: action.url,
      });
      return this.apiService.getRemoteStyles$(action.url).pipe(
        tap((style) => {
          this.stylingService.updateAppCSS(style);
        }),
        catchError((err) => {
          console.log("error loading remote style", err);
          return of(err);
        })
      );
    }
  }

  @Action(Config.UpdateStyleOptions)
  updateStyleOptions(
    ctx: StateContext<ConfigStateModel>,
    action: Config.UpdateStyleOptions
  ) {
    const state = ctx.getState();
    return this.apiService.getRemoteStylesOptions$().pipe(
      tap((styleOptions) => {
        ctx.setState({
          ...state,
          styleOptions: styleOptions,
        });
      }),
      catchError((err) => {
        console.log("error loading style options", err);
        return of(err);
      })
    );
  }

  @Action(Config.UpdateStaticText)
  updateStaticText(ctx: StateContext<ConfigStateModel>) {
    const state = ctx.getState();
    return this.apiService.getStaticText$(state.dataUrl).pipe(
      tap((staticText) => {
        // TODO: add error handling catchError?
        ctx.setState({
          ...state,
          staticText: staticText,
        });
      }),
      catchError((err) => {
        console.log("error loading static text", err);
        return of(err);
      })
    );
  }

  @Selector()
  static dataUrl(state: ConfigStateModel) {
    return state.dataUrl;
  }

  @Selector()
  static stylingUrl(state: ConfigStateModel) {
    return state.stylingUrl;
  }

  @Selector()
  static staticText(state: ConfigStateModel) {
    return state.staticText;
  }

  @Selector()
  static styleOptions(state: ConfigStateModel) {
    return state.styleOptions;
  }
}
