import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";

export const routes: Routes = [
  {
    path: "furniture",
    loadChildren: () =>
      import("./furniture/furniture.module").then((m) => m.FurnitureModule),
  },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class OtherAppsRoutingModule {}
