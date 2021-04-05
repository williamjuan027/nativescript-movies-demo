import { Component } from "@angular/core";
import { EventData, View } from "@nativescript/core";
import { LayersService, Icons, Fade } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-filter-bottomsheet",
  templateUrl: "filter-bottomsheet.component.html",
  animations: [Fade],
})
export class FilterBottomsheetComponent {
  icons = Icons;
  private _shade: View;
  languageTags = [
    { text: "English", selected: true },
    { text: "Spanish", selected: false },
    { text: "French", selected: false },
  ];

  durationTags = [
    { text: "Short", selected: true },
    { text: "Medium", selected: false },
    { text: "Long", selected: false },
  ];

  constructor(private layersService: LayersService) {}

  shadeLoaded(args: EventData): void {
    this._shade = <View>args.object;
    setTimeout(() => {
      this._shade.animate({
        opacity: 1,
        duration: 150,
      });
    }, 100);
  }

  apply(): void {
    this.close();
  }

  close(): void {
    this._shade.animate({
      opacity: 0,
      duration: 100,
    });
    setTimeout(() => {
      this.layersService.closeFilterBottomsheet();
    }, 50);
  }
}
