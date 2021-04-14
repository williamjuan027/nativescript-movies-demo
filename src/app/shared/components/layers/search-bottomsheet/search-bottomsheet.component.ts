import { Component } from "@angular/core";
import { tap, map, switchMap } from "rxjs/operators";
import {
  DataService,
  LayersService,
  Icons,
  NavigationService,
  Routes,
  ProductState,
} from "@app/core";
import { Select } from "@ngxs/store";

@Component({
  moduleId: module.id,
  selector: "ns-search-bottomsheet",
  templateUrl: "search-bottomsheet.component.html",
})
export class SearchBottomsheetComponent {
  // @Select(ProductState.categories) categories$;
  icons = Icons;

  // categories$ = this.dataService.getCategories();
  // searchResult$ = this.dataService.getRecommendedMovies();

  constructor(
    private dataService: DataService,
    private layersService: LayersService,
    private navigationService: NavigationService
  ) {}

  openFilterBottomsheet(): void {
    this.layersService.openFilterBottomsheet();
  }

  close(): void {
    this.layersService.closeSearchBottomsheet();
  }

  navigateToMovieDetails(movieId: string): void {
    this.navigationService.navigate(Routes.details, { id: movieId });
    this.close();
  }
}
