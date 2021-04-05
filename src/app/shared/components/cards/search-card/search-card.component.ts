import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ns-search-card",
  templateUrl: "search-card.component.html",
})
export class SearchCardComponent {
  @Input() imageSrc: string;
  @Input() title: string;
  @Input() description: string;
}
