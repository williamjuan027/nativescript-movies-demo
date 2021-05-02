import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiRoutes } from "../models/constants/api-routes";
import { ICategory, IProductGroup, RemoteStyle } from "../models/interfaces";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProductGroups$(baseUrl: string): Observable<IProductGroup[]> {
    return this.http
      .get(this._formatUrl(baseUrl, ApiRoutes.productGroups))
      .pipe(map((res) => (<any>res).productGroups));
  }

  getCategories$(baseUrl: string): Observable<ICategory[]> {
    return this.http
      .get(this._formatUrl(baseUrl, ApiRoutes.categories))
      .pipe(map((res) => (<any>res).categories));
  }

  getStaticText$(baseUrl: string): Observable<{ [key: string]: string }> {
    return this.http
      .get(this._formatUrl(baseUrl, ApiRoutes.staticText))
      .pipe(map((res) => (<any>res).staticText));
  }

  getRemoteStyles$(styleUrl: string): Observable<any> {
    return this.http.get(styleUrl, {
      responseType: "text",
    });
  }

  getRemoteStylesOptions$(): Observable<RemoteStyle[]> {
    return this.http
      .get(
        "https://raw.githubusercontent.com/williamjuan027/movies-app-api/main/styles/styles.json",
        {
          responseType: "json",
        }
      )
      .pipe(map((res) => (<any>res)?.styles));
  }

  private _formatUrl(baseUrl: string, extension: string): string {
    if (baseUrl.endsWith("/")) {
      return `${baseUrl}${extension}`.trim();
    }
    return `${baseUrl}/${extension}`.trim();
  }
}
