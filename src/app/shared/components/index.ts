import { CARDS_COMPONENTS } from "./cards";
import { LAYERS } from "./layers";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";

export const COMPONENTS = [
  ...CARDS_COMPONENTS,
  ...LAYERS,
  HeaderComponent,
  MenuComponent,
];

export * from "./cards";
export * from "./layers";
export * from "./header/header.component";
export * from "./menu/menu.component";
