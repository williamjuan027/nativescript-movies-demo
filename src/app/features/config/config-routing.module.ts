import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { ConfigComponent } from "./config.component";

export const routes: Routes = [
  {
    path: "",
    component: ConfigComponent,
  },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class ConfigRoutingModule {}
