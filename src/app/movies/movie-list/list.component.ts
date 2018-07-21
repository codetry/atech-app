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
  private sub1: Subscription;
  constructor(
    private _movie: MovieService,
    private _util: UtilService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnDestroy(): void {
    this.sub1 && this.sub1.unsubscribe();
  }

  getMovies(page: number = 1): void {
    this.sub1 = this._movie.movies(page, "popular").subscribe((movies: Movie[]) => {
      // console.log("movies", movies);
      if (movies) {
        this.movies.push(...movies);
      }
    });
  }

  getDetails(movie: Movie): void {
    alert("TODO: Get Details for movie ID: " + movie.id + "(" + movie.title + ")");
  }
}
