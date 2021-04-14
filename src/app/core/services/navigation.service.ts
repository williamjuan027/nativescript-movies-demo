import { Injectable } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private routerExtensions: RouterExtensions) {}

  navigate(path: string, params = null, clearHistory: boolean = false): void {
    const routeArray = [path];
    if (params) {
      if (Array.isArray(params)) {
        routeArray.push(...params);
      } else {
        routeArray.push(params);
      }
    }
    this.routerExtensions.navigate(routeArray, { clearHistory: clearHistory });
  }

  back(): void {
    this.routerExtensions.back();
  }
}
