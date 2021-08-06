import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { ProfileComponent } from "./profile.component";

export const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes),
  ],
})
export class ProfileRoutingModule {}
