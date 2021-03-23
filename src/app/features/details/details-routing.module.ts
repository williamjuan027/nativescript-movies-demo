import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { DetailsComponent } from "./details.component";

export const routes: Routes = [
    {
        path: ":id",
        component: DetailsComponent,
    },
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class DetailsRoutingModule {}
