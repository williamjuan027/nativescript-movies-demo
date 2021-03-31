import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ns-thumbnail-card",
  templateUrl: "thumbnail-card.component.html",
})
export class ThumbnailCardComponent {
  @Input() imageSrc: string;
}
