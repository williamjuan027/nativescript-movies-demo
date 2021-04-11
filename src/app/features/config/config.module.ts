import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "@app/shared";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";
import { ConfigRoutingModule } from "./config-routing.module";
import { ConfigComponent } from "./config.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    CommonModule,
    ConfigRoutingModule,
    SharedModule,
  ],
  declarations: [ConfigComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ConfigModule {}
