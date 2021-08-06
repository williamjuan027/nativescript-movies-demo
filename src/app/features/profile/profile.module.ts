import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { ProfileCardFrontComponent } from "./profile-card-front/profile-card-front.component";
import { ProfileCardBackComponent } from "./profile-card-back/profile-card-back.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ProfileRoutingModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileCardFrontComponent,
    ProfileCardBackComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProfileModule {}
