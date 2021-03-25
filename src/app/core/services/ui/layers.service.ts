import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class LayersService {
  private _layers$ = new BehaviorSubject<Layers>({
    quickviewBottomsheet: {
      isOpen: false,
      movieId: undefined,
    },
  });

  getLayers$(): Observable<Layers> {
    return this._layers$.asObservable();
  }

  openQuickviewBottomsheet(movieId: number): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      quickviewBottomsheet: {
        isOpen: true,
        movieId: movieId,
      },
    });
  }

  closeQuickviewBottomsheet(): void {
    this._layers$.next({
      ...this.getLayersCurrentValue(),
      quickviewBottomsheet: {
        isOpen: false,
        movieId: undefined,
      },
    });
  }

  getLayersCurrentValue(): Layers {
    return this._layers$.value;
  }
}

export interface Layers {
  quickviewBottomsheet: {
    isOpen: boolean;
    movieId: number;
  };
}
