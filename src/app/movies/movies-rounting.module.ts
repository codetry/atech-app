/**
 * Register Routes for movie related components
 */
 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie-list/list.component";
import { MovieDetailsComponent } from "./movie/details.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: MovieListComponent,
      },
      {
        path: "movie/:id",
        component: MovieDetailsComponent,
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule { }
