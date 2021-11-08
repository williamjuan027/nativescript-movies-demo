import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
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

export function asyncBoot(): Function {
  return (): Promise<void> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      });
      // }, 1000);
    });
}

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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: asyncBoot,
      multi: true,
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
