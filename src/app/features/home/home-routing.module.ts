import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { HomeComponent } from "./home.component";

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class HomeRoutingModule {}
