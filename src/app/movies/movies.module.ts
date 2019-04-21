import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from '../movies/movies-list/movies-list.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
