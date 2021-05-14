import { QuickviewBottomsheetComponent } from "./quickview-bottomsheet/quickview-bottomsheet.component";
import { SearchBottomsheetComponent } from "./search-bottomsheet/search-bottomsheet.component";
import { FilterBottomsheetComponent } from "./filter-bottomsheet/filter-bottomsheet.component";
import { AlertPopupComponent } from './alert-popup/alert-popup.component';

export const LAYERS = [
  QuickviewBottomsheetComponent,
  SearchBottomsheetComponent,
  FilterBottomsheetComponent,
  AlertPopupComponent
];

export * from "./quickview-bottomsheet/quickview-bottomsheet.component";
export * from "./search-bottomsheet/search-bottomsheet.component";
export * from "./filter-bottomsheet/filter-bottomsheet.component";
export * from './alert-popup/alert-popup.component';