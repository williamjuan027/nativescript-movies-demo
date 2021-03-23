import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "home",
        loadChildren: () =>
            import("./features/home/home.module").then((m) => m.HomeModule),
    },
    {
        path: "details",
        loadChildren: () =>
            import("./features/details/details.module").then(
                (m) => m.DetailsModule
            ),
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
