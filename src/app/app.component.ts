import { Component } from "@angular/core";
import {
  transition,
  style,
  state,
  animate,
  trigger,
} from "@angular/animations";
import { map } from "rxjs/operators";
import { LayersService } from "./core";
import { EventData } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
  animations: [
    trigger("mainContent", [
      state(
        "menuIsOpen",
        style({ transform: "translate(200, 70)scale(0.7,0.7)" })
      ),
      state("menuIsClosed", style({ transform: "translate(0, 0)scale(1,1)" })),
      transition(
        "menuIsClosed => menuIsOpen",
        animate(
          "300ms ease-in-out",
          style({ transform: "translate(200, 70)scale(0.7,0.7)" })
        )
      ),
      transition(
        "menuIsOpen => menuIsClosed",
        animate(
          "300ms ease-in-out",
          style({ transform: "translate(0, 0)scale(1,1)" })
        )
      ),
    ]),
    trigger("mainContentShade", [
      state(
        "menuIsOpen",
        style({ transform: "translate(165, 75)scale(0.65,0.65)" })
      ),
      state("menuIsClosed", style({ transform: "translate(0, 0)scale(1,1)" })),
      transition(
        "menuIsClosed => menuIsOpen",
        animate(
          "300ms 100ms ease-in-out",
          style({ transform: "translate(165, 75)scale(0.65,0.65)" })
        )
      ),
      transition(
        "menuIsOpen => menuIsClosed",
        animate(
          "300ms ease-in-out",
          style({ transform: "translate(0, 0)scale(1,1)" })
        )
      ),
    ]),
  ],
})
export class AppComponent {
  menuIsOpen$ = this.layersService
    .getLayers$()
    .pipe(map((state) => state.menu.isOpen));

  constructor(
    private layersService: LayersService
  ) {}

  closeMenu(): void {
    this.layersService.closeMenu();
  }
}
