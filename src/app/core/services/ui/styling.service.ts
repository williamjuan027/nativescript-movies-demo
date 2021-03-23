import { Injectable } from "@angular/core";
import { EventData, isIOS, ContentView } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class StylingService {
  constructor() {}

  applyShadow(args: EventData): void {
    if (isIOS) {
      const iosNativeView = (<ContentView>args.object).ios;
      const layer = iosNativeView.layer;
      layer.shadowColor = UIColor.blackColor.CGColor;
      layer.shadowOffset = CGSizeMake(1, 1);
      layer.shadowOpacity = 0.7;
      layer.shadowRadius = 5;
    }
  }
}
