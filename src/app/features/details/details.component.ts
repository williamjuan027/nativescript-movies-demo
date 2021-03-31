import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page, EventData } from "@nativescript/core";
import { map, switchMap } from "rxjs/operators";
import {
  DataService,
  Icons,
  NavigationService,
  Routes,
  SlideUpFadeStagger,
} from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "details.component.html",
  animations: [SlideUpFadeStagger],
})
export class DetailsComponent {
  icons = Icons;

  movieId$ = this.activatedRoute.params.pipe(map((params) => params.id));
  movieDetails$ = this.movieId$.pipe(
    switchMap((id) => this.dataService.getMovieById(id))
  );
  relatedMovies$ = this.movieId$.pipe(
    switchMap((id) => this.dataService.getRelatedMoviesById(id))
  );

  constructor(
    private page: Page,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private navigationService: NavigationService,
  ) {
    this.page.actionBarHidden = true;
  }

  navigateToMovieDetails(id: number): void {
    this.navigationService.navigate(Routes.details, { id: id });
  }
}
