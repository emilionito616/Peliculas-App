import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
/* // tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';
import 'rxjs/add/operator/map'; */
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "a24f64b7687f8521006de92a4df82103";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private http: HttpClient ) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();

    let desdeStr = [desde.getFullYear(), desde.getMonth() + 1 < 10 ? (desde.getMonth() + 1).toString().padStart(2, '0') : desde.getMonth() + 1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');
    let hastaStr = [hasta.getFullYear(), hasta.getMonth() + 1 < 10 ? (hasta.getMonth() + 1).toString().padStart(2, '0') : hasta.getMonth() + 1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');

    hasta.setDate(hasta.getDate() + 7 );

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
                    .pipe(map( (res: any) => res.results));
  }

  getPopulares() {
    const url = `${ this.urlMoviedb }/discover/movie?with_genres=18&primary_release_year=2020&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
    .pipe(map( (res: any) => res.results));
  }

  getPopularesKids() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get( url )
    .pipe(map( (res: any) => res.results));
  }

  buscarPelicula( texto: string ) {

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.http.get( url )
    .pipe(map( (res: any) => res.results));
 
  }
}
