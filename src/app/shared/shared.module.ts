import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { COMPONENTS } from "./components";

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
