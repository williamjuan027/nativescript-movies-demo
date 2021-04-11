import { ICategory, IProductGroup } from "@app/core";

export interface ProductStateModel {
  categories: ICategory[];
  productGroups: IProductGroup[];
}
