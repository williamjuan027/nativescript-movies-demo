import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // // getCategories(): Observable<any> {
  // //     return of(categories).pipe(map((res) => res.categories));
  // // }
  // // getMovies(): Observable<any> {
  // //     return of(productGroups).pipe(map((res) => res.movies));
  // // }
  // // getMovieById(id: number): Observable<any> {
  // //     return this.getMovies().pipe(
  // //         map((movies) => movies.find((movie) => movie.id == id))
  // //     );
  // // }
  // getRelatedMoviesById(id: number): Observable<any> {
  //     // return this.getMovies().pipe(
  //     //     // map((movies) => movies.find((movie) => movie.id == id))
  //     // );
  //     return this.getRecommendedMovies();
  // }
  // getFeaturedMovies(): Observable<any> {
  //     return this.getMovies().pipe(
  //         map((movies) =>
  //             movies.filter((movie) => movie.groups.includes("featured"))
  //         )
  //     );
  // }
  // getRecommendedMovies(): Observable<any> {
  //     return this.getMovies().pipe(
  //         map((movies) =>
  //             movies.filter((movie) => movie.groups.includes("recommended"))
  //         )
  //     );
  // }
  // getFavoriteMovies(): Observable<any> {
  //     return this.getMovies().pipe(
  //         map((movies) =>
  //             movies.filter((movie) => movie.groups.includes("favorite"))
  //         )
  //     );
  // }
}
