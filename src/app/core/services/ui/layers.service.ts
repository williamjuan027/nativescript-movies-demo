import {
  ComponentFactoryResolver,
  Injectable,
  Injector,
  NgZone,
  ApplicationRef,
} from "@angular/core";
import {
  getRootLayout,
  View,
  CoreTypes,
  ProxyViewContainer,
} from "@nativescript/core";
import { BehaviorSubject, Observable } from "rxjs";
import {
  FilterBottomsheetComponent,
  QuickviewBottomsheetComponent,
  SearchBottomsheetComponent,
} from "~/shared";

export const DEFAULT_ANIMATION_CURVE = CoreTypes.AnimationCurve.cubicBezier(
  0.17,
  0.89,
  0.24,
  1.11
);

@Injectable({
  providedIn: "root",
})
export class LayersService {
  constructor(
    private zone: NgZone,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) {}

  private _layers$ = new BehaviorSubject<Layers>({
    menu: {
      isOpen: false,
    },
    alertPopup: {
      isOpen: false,
    },
    quickviewBottomsheet: {
      view: null,
      isAnimating: false,
      productId: undefined,
    },
    searchBottomsheet: {
      view: null,
      isAnimating: false,
    },
    filterBottomsheet: {
      view: null,
      isAnimating: false,
    },
  });

  getLayers$(): Observable<Layers> {
    return this._layers$.asObservable();
  }

  openMenu(): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      menu: {
        isOpen: true,
      },
    });
  }

  closeMenu(): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      menu: {
        isOpen: false,
      },
    });
  }

  openAlertPopup(): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      alertPopup: {
        isOpen: true,
      },
    });
  }

  closeAlertPopup(): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      alertPopup: {
        isOpen: false,
      },
    });
  }

  // Quickview Bottomsheet ----------

  openQuickviewBottomsheet(productId: number): void {
    this._getView(QuickviewBottomsheetComponent).then(
      (quickviewBottomsheet) => {
        this._layers$.next({
          ...this.getLayersCurrentValue(),
          quickviewBottomsheet: {
            view: quickviewBottomsheet,
            isAnimating: true,
            productId: productId,
          },
        });
        getRootLayout()
          .open(quickviewBottomsheet, {
            shadeCover: {
              color: "#000",
              opacity: 0.5,
              tapToClose: true,
            },
            animation: {
              enterFrom: {
                translateY: 500,
                duration: 250,
                curve: DEFAULT_ANIMATION_CURVE,
              },
              exitTo: {
                translateY: 500,
                duration: 250,
                curve: DEFAULT_ANIMATION_CURVE,
              },
            },
          })
          .then(() => {
            this._layers$.next({
              ...this.getLayersCurrentValue(),
              quickviewBottomsheet: {
                ...this.getLayersCurrentValue().quickviewBottomsheet,
                isAnimating: false,
              },
            });
          });
      }
    );
  }

  closeQuickviewBottomsheet(): void {
    const quickViewBottomsheet = this.getLayersCurrentValue()
      .quickviewBottomsheet.view;
    if (quickViewBottomsheet) {
      this._layers$.next({
        ...this.getLayersCurrentValue(),
        quickviewBottomsheet: {
          ...this.getLayersCurrentValue().quickviewBottomsheet,
          isAnimating: true,
        },
      });
      getRootLayout()
        .close(quickViewBottomsheet)
        .then(() => {
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            quickviewBottomsheet: {
              view: null,
              isAnimating: false,
              productId: undefined,
            },
          });
        });
    }
  }

  // Search Bottomsheet ----------

  openSearchBottomsheet(): void {
    this._getView(SearchBottomsheetComponent).then((searchBottomsheet) => {
      this._layers$.next({
        ...this.getLayersCurrentValue(),
        searchBottomsheet: {
          view: searchBottomsheet,
          isAnimating: true,
        },
      });
      getRootLayout()
        .open(searchBottomsheet, {
          shadeCover: {
            color: "#000",
            opacity: 0.5,
            tapToClose: true,
          },
          animation: {
            enterFrom: {
              translateY: 800,
              duration: 250,
              curve: DEFAULT_ANIMATION_CURVE,
            },
            exitTo: {
              translateY: 800,
              duration: 250,
              curve: DEFAULT_ANIMATION_CURVE,
            },
          },
        })
        .then(() => {
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            searchBottomsheet: {
              ...this.getLayersCurrentValue().searchBottomsheet,
              isAnimating: false,
            },
          });
        });
    });
  }

  closeSearchBottomsheet(): void {
    const searchBottomsheet = this.getLayersCurrentValue().searchBottomsheet
      .view;
    if (searchBottomsheet) {
      this._layers$.next({
        ...this.getLayersCurrentValue(),
        searchBottomsheet: {
          ...this.getLayersCurrentValue().searchBottomsheet,
          isAnimating: true,
        },
      });
      getRootLayout()
        .close(searchBottomsheet)
        .then(() => {
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            searchBottomsheet: {
              view: null,
              isAnimating: false,
            },
          });
        });
    }
  }

  // Filter Bottomsheet ----------

  openFilterBottomsheet(): void {
    this._getView(FilterBottomsheetComponent).then((filterBottomsheet) => {
      this._layers$.next({
        ...this.getLayersCurrentValue(),
        filterBottomsheet: {
          view: filterBottomsheet,
          isAnimating: true,
        },
      });
      getRootLayout()
        .open(filterBottomsheet, {
          shadeCover: {
            color: "#000",
            opacity: 0.5,
            tapToClose: true,
          },
          animation: {
            enterFrom: {
              translateY: 500,
              duration: 250,
              curve: DEFAULT_ANIMATION_CURVE,
            },
            exitTo: {
              translateY: 500,
              duration: 250,
              curve: DEFAULT_ANIMATION_CURVE,
            },
          },
        })
        .then(() => {
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            filterBottomsheet: {
              ...this.getLayersCurrentValue().filterBottomsheet,
              isAnimating: false,
            },
          });
        });
    });
  }

  closeFilterBottomsheet(): void {
    const filterBottomsheet = this.getLayersCurrentValue().filterBottomsheet
      .view;
    if (filterBottomsheet) {
      this._layers$.next({
        ...this.getLayersCurrentValue(),
        filterBottomsheet: {
          ...this.getLayersCurrentValue().filterBottomsheet,
          isAnimating: true,
        },
      });
      getRootLayout()
        .close(filterBottomsheet)
        .then(() => {
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            filterBottomsheet: {
              view: null,
              isAnimating: false,
            },
          });
        });
    }
  }

  getLayersCurrentValue(): Layers {
    return this._layers$.value;
  }

  private _getView(component): Promise<View> {
    return new Promise((resolve) => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<
        View
      >(component);
      this.zone.run(() => {
        const componentRef = componentFactory.create(this.injector);
        let componentView = componentRef.location.nativeElement;
        if (componentView instanceof ProxyViewContainer) {
          componentView = componentView.getChildAt(0);
        }

        if (componentView.parent) {
          (<any>componentView.parent).removeChild(componentView);
        }
        (<any>componentView).__ngRef = componentRef;
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.changeDetectorRef.detectChanges();

        resolve(componentView);
      });
    });
  }
}

export interface Layers {
  menu: {
    isOpen: boolean;
  };
  alertPopup: {
    isOpen: boolean;
  };
  quickviewBottomsheet: {
    view: View;
    isAnimating: boolean;
    productId: number;
  };
  searchBottomsheet: {
    isAnimating: boolean;
    view: View;
  };
  filterBottomsheet: {
    isAnimating: boolean;
    view: View;
  };
}
