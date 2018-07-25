import { Component, OnInit, OnDestroy } from '@angular/core';

import { MovieService } from "../global/movie.service";
import { Movie } from "../global/movie";
import { Subscription } from "rxjs/Subscription";
import { UtilService } from "../../shared/services/util.service";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class MovieListComponent implements OnInit, OnDestroy {

  private movies: Movie[] = [];
  private moviesTv: Movie[] = [];
  private sub1: Subscription;
  constructor(
    private _movie: MovieService,
    private _util: UtilService
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getMoviesTv();
  }

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getMovies(page: number = 1): void {
    this.sub1 = this._movie.movies(page, "popular").subscribe((movies: Movie[]) => {
      if (movies) {
        this.movies.push(...movies);
      }
    });
  }

  getMoviesTv(page: number = 1): void {
    this.sub1 = this._movie.moviesTv(page, "popular").subscribe((moviesTv: Movie[]) => {
      if (moviesTv) {
        this.moviesTv.push(...moviesTv);
      }
      console.log("moviesTv", moviesTv);
    });
  }

  getDetails(movie: Movie): void {
    alert("TODO: Get Details for movie ID: " + movie.id + "(" + movie.title + ")");
  }
}
