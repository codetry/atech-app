import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { GenerosFilmComponent } from './generos-film/generos-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    DetailFilmComponent,
    GenerosFilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
