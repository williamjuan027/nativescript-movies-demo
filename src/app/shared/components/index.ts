import { CARDS_COMPONENTS } from "./cards";
import { LAYERS } from "./layers";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { TagComponent } from "./tag/tag.component";

export const COMPONENTS = [
  ...CARDS_COMPONENTS,
  ...LAYERS,
  HeaderComponent,
  MenuComponent,
  TagComponent,
];

export * from "./cards";
export * from "./layers";
export * from "./header/header.component";
export * from "./menu/menu.component";
export * from "./tag/tag.component";
