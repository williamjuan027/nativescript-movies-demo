import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ns-tag",
  templateUrl: "tag.component.html",
})
export class TagComponent {
  @Input() tagText: string;
  @Input() selected = false;
}
