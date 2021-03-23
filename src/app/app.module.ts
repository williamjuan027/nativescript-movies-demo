import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptAnimationsModule,
    NativeScriptCommonModule,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        CommonModule,
        HttpClientModule,
        NativeScriptAnimationsModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
