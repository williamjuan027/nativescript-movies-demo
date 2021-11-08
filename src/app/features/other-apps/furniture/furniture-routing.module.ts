import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { FurnitureComponent } from "./furniture.component";

export const routes: Routes = [
  {
    path: "",
    component: FurnitureComponent,
  },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class FurnitureRoutingModule {}
