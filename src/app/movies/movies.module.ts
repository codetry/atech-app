/**
 * Movie Module
 */
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { MoviesRoutingModule } from "./movies-rounting.module";

import { HttpClientModule } from "@angular/common/http";

import { MovieListComponent } from "./movie-list/list.component";
import { MovieDetailsComponent } from "./movie/details.component";

import { MovieService } from "./global/movie.service";

// List of component to export
const exportedComponent: any[] = [
  MovieListComponent,
  MovieDetailsComponent
];

@NgModule({
  imports: [ SharedModule, MoviesRoutingModule, HttpClientModule ],
  declarations: [
    ...exportedComponent
  ],
  exports: [ ...exportedComponent ],
  providers: [ MovieService ]
})

export class MoviesModule { }
