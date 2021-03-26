import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { COMPONENTS } from "./components";

@NgModule({
  imports: [CommonModule, NativeScriptCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
