import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProfile, Icons } from "~/core";

@Component({
  moduleId: module.id,
  selector: "ns-profile-card-back",
  templateUrl: "./profile-card-back.component.html",
})
export class ProfileCardBackComponent {
  @Input() profile: IProfile;
  @Output() save = new EventEmitter<IProfile>();

  icons = Icons;

  onSave(): void {
    this.save.emit(this.profile);
  }
}
