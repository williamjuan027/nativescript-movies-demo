export interface ConfigStateModel {
  dataUrl: string;
  stylingUrl: string;
  staticText: { [key: string]: string | { [key: string]: string } };
}
