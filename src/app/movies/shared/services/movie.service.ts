import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w500';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<{results: Movie[]}>(`${MOVIES_API}&api_key=${API_KEY}`)
    .pipe(
      map(obj => {
        obj.results.map((movie: Movie) => {
            movie.pictureURL = this.getPictureURL(movie.poster_path);
        });

        return obj.results;
      })
    );
  }

  getPictureURL(posterPath: string): string {
    if (!posterPath) {
      return undefined;
    }

    return `${PICTURE_URL}${posterPath}`;
  }
}
