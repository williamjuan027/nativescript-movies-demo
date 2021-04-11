import { Injectable } from "@angular/core";
import { Application } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class StylingService {
  constructor() {}

  updateAppCSS(styles): void {
    try {
      const sanitizedStyles = styles.replace(/(\r\n|\n|\r)/gm, "");
      Application.addCss(sanitizedStyles);
    } catch (err) {
      console.log("error updating app css");
    }
  }
}
