import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import {
  DataService,
  LayersService,
  SlideUpFadeStagger,
} from "@app/core";
import { EventData, isIOS, Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
  animations: [SlideUpFadeStagger],
})
export class HomeComponent {
  categories$ = this.dataService.getCategories();
  // get just the first featured movie for now, we might want to add a carousel later
  featuredMovie$ = this.dataService
    .getFeaturedMovies()
    .pipe(map((movies) => movies[0]));
  favoriteMovies$ = this.dataService.getFavoriteMovies();
  recommendedMovies$ = this.dataService.getRecommendedMovies();
  ios = isIOS;

  constructor(
    private page: Page,
    private dataService: DataService,
    private layersService: LayersService
  ) {
    this.page.actionBarHidden = true;
  }

  navigateToMovieDetails(id: number): void {
    this.layersService.openQuickviewBottomsheet(id);
  }
}
