/**
 * This service will make API calls
 */
import { Injectable } from "@angular/core";

import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Movie } from "./movie";
import { UtilService } from "../../shared/services/util.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';;

@Injectable()
export class MovieService {

  private baseURL: string;
  private baseURLTV: string;
  private popularURL: string;
  private latestURL: string;

  constructor (
    private _http: HttpClient,
    private _util: UtilService
  ) {
    this.baseURL = `${this._util.theMovieDbURL}/movie`;
    this.baseURLTV = `${this._util.theMovieDbURLTV}/tv`;
    this.popularURL = "/popular";
    this.latestURL = "/latest";
  }

  movies(page: number = 1, type: string = "all", lang: string = "pt-br"): Observable<Movie[]> {
    let url: string = `${this.baseURL}`;
    if (type !== "all") {
      url += this[`${type}URL`];
    }
    url += `?api_key=${this._util.apiKey}`;
    url += `&page=${page}`;
    url += `&language=${lang}`;

    return this._http.get<any>(url).map(response => {
      return response.results as Movie[] || [];
    }).catch(err => {
      return of(null);
    });
  }
  moviesTv(page: number = 1, type: string = "all", lang: string = "pt-br", tv_id: number = 550): Observable<Movie[]> {
    let urlTv: string = `${this.baseURL}`;
    if (type !== "popular") {
      urlTv += this[`${type}URL`];
    }
    urlTv += `/${tv_id}`;
    urlTv += `?api_key=${this._util.apiKey}`;
    urlTv += `&page=${page}`;
    urlTv += `&language=${lang}`;

    return this._http.get<any>(urlTv).map(response => {
      return response.results as Movie[] || [];
    }).catch(err => {
      return of(null);
    });
  }

}
