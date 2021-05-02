import { Component, Input } from "@angular/core";
import { Icons, LayersService, NavigationService } from "@app/core";
import { isIOS } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-header",
  templateUrl: "header.component.html",
})
export class HeaderComponent {
  @Input() headerTitle: string;
  @Input() hasBackButton: boolean;
  @Input() hasMenuButton: boolean;
  @Input() rightActionButton?: {
    icon: typeof Icons;
    onTap: () => void;
  };

  icons = Icons;
  ios = isIOS;

  constructor(
    private navigationService: NavigationService,
    private layersService: LayersService
  ) {}

  back(): void {
    this.navigationService.back();
  }

  openMenu(): void {
    this.layersService.openMenu();
  }
}
