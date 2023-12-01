import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/types/movie.types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() Cards!: Movie[];
  filterTitle: string = '';
  filterYear: number = 0;

  isInWatchlist(card: Movie): boolean {
    const userWatchList = JSON.parse(
      localStorage.getItem('userWatchList') || '[]'
    );
    return userWatchList.some((item: any) => item._id === card._id);
  }

  addToWatchlist(card: Movie) {
    const userWatchList = JSON.parse(
      localStorage.getItem('userWatchList') || '[]'
    );
    userWatchList.push(card);
    localStorage.setItem('userWatchList', JSON.stringify(userWatchList));
  }
}
