import { Component } from "@angular/core";
import { LayersService, SlideUpFadeStagger, Icons } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-menu",
  templateUrl: "menu.component.html",
  animations: [SlideUpFadeStagger],
})
export class MenuComponent {
  icons = Icons;

  menuOptions = [
    { displayName: "Home", icon: this.icons.home },
    { displayName: "Account", icon: this.icons.account },
    { displayName: "Downloads", icon: this.icons.downloads },
    { displayName: "Settings", icon: this.icons.settings },
    { displayName: "Help", icon: this.icons.help },
  ];
  constructor(private layersService: LayersService) {}

  closeMenu(): void {
    this.layersService.closeMenu();
  }
}
