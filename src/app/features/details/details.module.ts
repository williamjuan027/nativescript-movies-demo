import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { SharedModule } from "@app/shared";
import { DetailsRoutingModule } from "./details-routing.module";
import { DetailsComponent } from "./details.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CommonModule,
    SharedModule,
    DetailsRoutingModule,
  ],
  declarations: [DetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DetailsModule {}
