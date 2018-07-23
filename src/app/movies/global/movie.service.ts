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
  private popularURL: string;
  private latestURL: string;

  constructor (
    private _http: HttpClient,
    private _util: UtilService
  ) {
    this.baseURL = `${this._util.theMovieDbURL}/movie`;
    this.popularURL = "/popular";
    this.latestURL = "/latest";
  }

  movies(page: number = 1, type: string = "all"): Observable<Movie[]> {
    let url: string = `${this.baseURL}`;
    if (type !== "all") {
      url += this[`${type}URL`];
    }
    url += `?api_key=${this._util.apiKey}`;
    url += `&page=${page}`;
    // function (response) {
    //   respone = this._http.get(url);
    //   return response;
    // }
    return this._http.get(url).map(response => {
      return response;
      console.log("res" ,response);
    }).catch(err => {
      return of(null);
    });
  }

}
