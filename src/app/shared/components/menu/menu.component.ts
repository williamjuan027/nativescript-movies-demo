import { Component } from "@angular/core";
import {
  LayersService,
  SlideUpFadeStagger,
  Icons,
  NavigationService,
  Routes,
} from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-menu",
  templateUrl: "menu.component.html",
  animations: [SlideUpFadeStagger],
})
export class MenuComponent {
  icons = Icons;

  menuOptions = [
    {
      displayName: "Home",
      icon: this.icons.home,
      onTap: () => {
        this.navigationService.navigate(Routes.home, null, true);
        this.closeMenu();
      },
    },
    {
      displayName: "Profile",
      icon: this.icons.account,
      onTap: () => {
        this.navigationService.navigate(Routes.profile, null, true);
        this.closeMenu();
      },
    },
    { displayName: "Downloads", icon: this.icons.downloads },
    {
      displayName: "Settings",
      icon: this.icons.settings,
      onTap: () => {
        this.navigationService.navigate(Routes.config, null, true);
        this.closeMenu();
      },
    },
    { displayName: "Help", icon: this.icons.help },
  ];
  constructor(
    private layersService: LayersService,
    private navigationService: NavigationService
  ) {}

  closeMenu(): void {
    this.layersService.closeMenu();
  }
}
