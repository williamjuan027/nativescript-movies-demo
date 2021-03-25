import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import {
  DataService,
  LayersService,
  NavigationService,
  Routes,
  SlideUpFadeStagger,
} from "@app/core";
import { EventData, isIOS, GridLayout, Page } from "@nativescript/core";

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

  constructor(
    private page: Page,
    private dataService: DataService,
    private navigationService: NavigationService,
    private layersService: LayersService
  ) {
    this.page.actionBarHidden = true;
  }

  applyShadow(args: EventData): void {
    if (isIOS) {
      const iosNativeView = (<GridLayout>args.object).ios;
      const layer = iosNativeView.layer;
      layer.shadowColor = UIColor.blackColor.CGColor;
      layer.shadowOffset = CGSizeMake(1, 1);
      layer.shadowOpacity = 0.7;
      layer.shadowRadius = 5;
    }
  }

  navigateToMovieDetails(id: number): void {
    // this.navigationService.navigate(Routes.details, { id: id });
    this.layersService.openQuickviewBottomsheet(id);
  }
}
