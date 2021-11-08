import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";

import { OtherAppsRoutingModule } from "./other-apps-routing.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    OtherAppsRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class OtherAppsModule {}
