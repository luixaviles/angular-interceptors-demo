import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from '../movies/movies-list/movies-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
