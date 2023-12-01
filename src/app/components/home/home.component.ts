import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Movie } from 'src/app/types/movie.types';
import { MoviesData } from 'src/app/utils/moviesData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  MoviesCards: Movie[] = [];
  MoviesCarrousel: Movie[] = [];
  isLoading = true;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getAllMovies().subscribe({
      next: (res) => {
        this.MoviesCards = res;
        this.MoviesCarrousel = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.MoviesCards = MoviesData;
        this.MoviesCarrousel = MoviesData;
        this.isLoading = false;
      },
    });
  }
}
