import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from '@nativescript/angular';
import { NativeScriptModule, NativeScriptCommonModule } from "@nativescript/angular";
import { LoadingComponent } from "./loading.component";


import { LottieView } from '@nativescript-community/ui-lottie';

registerElement('LottieView', () => LottieView);

@NgModule({
    bootstrap: [LoadingComponent],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        CommonModule,
    ],
    declarations: [LoadingComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class LoadingModule {}
