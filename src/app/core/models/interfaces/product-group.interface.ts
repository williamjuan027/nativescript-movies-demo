import { IProduct } from "./product.interface";

export interface IProductGroup {
  displayName: string;
  groupKey: string;
  products: IProduct[];
}
