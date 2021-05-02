import { platformNativeScriptDynamic, registerElement } from "@nativescript/angular";

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
