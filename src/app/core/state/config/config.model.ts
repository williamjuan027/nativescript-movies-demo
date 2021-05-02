import { RemoteStyle } from "~/core/models";

export interface ConfigStateModel {
  dataUrl: string;
  stylingUrl: string;
  styleOptions: RemoteStyle[];
  staticText: { [key: string]: string | { [key: string]: string } };
}
