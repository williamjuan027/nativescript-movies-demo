export interface IProduct {
  id: number;
  title: string;
  description: string;
  keyInformation: {
    [key: string]: string | number;
  }[];
  rating: number;
  categories: string[];
  groups: string[];
  related: IProduct[];
  image: {
    thumbnail: string;
    cover: string;
  };
  tinted?: boolean;
}
