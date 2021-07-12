import { platformNativeScript, runNativeScriptAngularApp } from "@nativescript/angular";

import { AppModule } from "./app/app.module";
import { LoadingModule } from "./app/features/loading/loading.module";

runNativeScriptAngularApp({
    appModuleBootstrap: (reason: string) => platformNativeScript().bootstrapModule(AppModule),
    loadingModule: (reason: string) => platformNativeScript().bootstrapModule(LoadingModule),
})
