import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  movies$?: Observable<Movie[]>;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies().pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
