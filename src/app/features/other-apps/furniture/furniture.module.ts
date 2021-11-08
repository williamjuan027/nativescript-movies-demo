import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";

import { FurnitureRoutingModule } from "./furniture-routing.module";
import { FurnitureComponent } from "./furniture.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    FurnitureRoutingModule,
  ],
  declarations: [FurnitureComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FurnitureModule {}
