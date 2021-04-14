export namespace Product {
  export class LoadCategories {
    static readonly type = "[Product] Load Categories";
    constructor(public url: string) {}
  }
  export class LoadProductGroups {
    static readonly type = "[Product] Load Products Groups";
    constructor(public url: string) {}
  }
}
