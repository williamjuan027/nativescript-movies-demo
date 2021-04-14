import { Component } from "@angular/core";
import { tap, map, switchMap } from "rxjs/operators";
import {
  DataService,
  LayersService,
  Icons,
  NavigationService,
  Routes,
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
  // movieDetails$ = this.state$.pipe(
  //   map((state) => state.movieId),
  //   tap((movieId) => (this._movieId = movieId)),
  //   switchMap((movieId) => this.dataService.getMovieById(movieId))
  // );

  icons = Icons;
  private _movieId;

  constructor(
    private dataService: DataService,
    private layersService: LayersService,
    private navigationService: NavigationService
  ) {}

  close(): void {
    this.layersService.closeQuickviewBottomsheet();
  }

  navigateToMovieDetails(): void {
    this.navigationService.navigate(Routes.details, { id: this._movieId });
    this.close();
  }
}
