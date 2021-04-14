import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptModule,
  NativeScriptAnimationsModule,
  NativeScriptCommonModule,
  NativeScriptHttpClientModule,
} from "@nativescript/angular";
import { NgxsModule } from "@ngxs/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfigState, ProductState } from "./core";
import { SharedModule } from "./shared";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    CommonModule,
    HttpClientModule,
    NativeScriptAnimationsModule,
    NgxsModule.forRoot([ConfigState, ProductState], { developmentMode: true }),
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
