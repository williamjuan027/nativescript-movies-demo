import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "@app/shared";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
