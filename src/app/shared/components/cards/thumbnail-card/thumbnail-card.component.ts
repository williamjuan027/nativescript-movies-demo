import { Component, Input } from "@angular/core";
import { EventData } from "@nativescript/core";
import { StylingService } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-thumbnail-card",
  templateUrl: "thumbnail-card.component.html",
})
export class ThumbnailCardComponent {
  @Input() imageSrc: string;

  constructor(private stylingService: StylingService) {}

  cardLoaded(args: EventData): void {
    this.stylingService.applyShadow(args);
  }
}
