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
      import("./features/details/details.module").then((m) => m.DetailsModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./features/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "config",
    loadChildren: () =>
      import("./features/config/config.module").then((m) => m.ConfigModule),
  },
  {
    path: "other-apps",
    loadChildren: () =>
      import("./features/other-apps/other-apps.module").then(
        (m) => m.OtherAppsModule
      ),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
