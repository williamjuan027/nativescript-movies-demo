import { Component } from "@angular/core";
import { map, switchMap } from "rxjs/operators";
import { DataService, LayersService, Fade, SlideUp } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-quickview-bottomsheet",
  templateUrl: "quickview-bottomsheet.component.html",
  animations: [Fade, SlideUp],
})
export class QuickviewBottomsheetComponent {
  state$ = this.layersService
    .getLayers$()
    .pipe(map((layers) => layers.quickviewBottomsheet));
  isOpen$ = this.state$.pipe(map((state) => state.isOpen));
  movieDetails$ = this.state$.pipe(
    map((state) => state.movieId),
    switchMap((id) => this.dataService.getMovieById(id))
  );
  constructor(
    private dataService: DataService,
    private layersService: LayersService
  ) {}

  close(): void {
    this.layersService.closeQuickviewBottomsheet();
  }
}
