import {
  ComponentFactoryResolver,
  Injectable,
  Injector,
  NgZone,
  ApplicationRef,
  ComponentRef,
} from "@angular/core";
import {
  getRootLayout,
  View,
  GridLayout,
  CoreTypes,
  ProxyViewContainer,
} from "@nativescript/core";
import { BehaviorSubject, Observable } from "rxjs";
import { QuickviewBottomsheetComponent } from "~/shared";

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
    quickviewBottomsheet: {
      isOpen: false,
      movieId: undefined,
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

  private _quickviewBottomsheet: View;
  openQuickviewBottomsheet(movieId: number): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      quickviewBottomsheet: {
        isOpen: true,
        movieId: movieId,
      },
    });
    this._getView(QuickviewBottomsheetComponent).then(
      (quickviewBottomsheet) => {
        this._quickviewBottomsheet = quickviewBottomsheet;
        getRootLayout().open(this._quickviewBottomsheet, {
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
        });
      }
    );
  }

  closeQuickviewBottomsheet(): void {
    if (this._quickviewBottomsheet) {
      getRootLayout()
        .close(this._quickviewBottomsheet)
        .then(() => {
          this._quickviewBottomsheet = null;
          this._layers$.next({
            ...this.getLayersCurrentValue(),
            quickviewBottomsheet: {
              isOpen: false,
              movieId: undefined,
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
  quickviewBottomsheet: {
    isOpen: boolean;
    movieId: number;
  };
}
