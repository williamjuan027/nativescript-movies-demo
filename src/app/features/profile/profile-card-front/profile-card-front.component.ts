import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProfile, Icons } from "~/core";

@Component({
  moduleId: module.id,
  selector: "ns-profile-card-front",
  templateUrl: "./profile-card-front.component.html",
})
export class ProfileCardFrontComponent {
  @Input() profile: IProfile;
  @Output() edit = new EventEmitter<void>();

  icons = Icons;

  onEdit(): void {
    this.edit.emit();
  }
}
