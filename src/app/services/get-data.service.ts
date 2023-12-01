import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie.types';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: string): Observable<Movie> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  // createMovie(movie: Movie): Observable<Movie> {
  //   return this.http.post<Movie>(this.apiUrl, movie);
  // }

  // updateMovie(id: string, movie: Movie): Observable<Movie> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<Movie>(url, movie);
  // }

  // deleteMovie(id: string): Observable<Movie> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<Movie>(url);
  // }
}
