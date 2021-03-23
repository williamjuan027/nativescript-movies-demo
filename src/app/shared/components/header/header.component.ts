import { Component, Input } from "@angular/core";
import { Icons, NavigationService } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-header",
  templateUrl: "header.component.html",
})
export class HeaderComponent {
  @Input() headerTitle: string;
  @Input() hasBackButton: boolean;

  icons = Icons;

  constructor(private navigationService: NavigationService) {}

  back(): void {
    this.navigationService.back();
  }
}
