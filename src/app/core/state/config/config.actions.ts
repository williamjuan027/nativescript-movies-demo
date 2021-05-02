export namespace Config {
  export class UpdateDataUrl {
    static readonly type = "[Config] Update Data URL";
    constructor(public url: string) {}
  }

  export class UpdateStylingUrl {
    static readonly type = "[Config] Update Styling URL";
    constructor(public url: string) {}
  }

  export class UpdateStyleOptions {
    static readonly type = "[Config] Update Style Options";
  }

  export class UpdateStaticText {
    static readonly type = "[Config] Update Static Text";
  }
}
