// filter-by-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/app/types/movie.types';

@Pipe({
  name: 'filterByDate',
})
export class MovieFilterByDatePipe implements PipeTransform {
  transform(cards: Movie[], filterYear: number): Movie[] {
    if (!filterYear) {
      return cards;
    }

    return cards.filter((card) => {
      const cardDate = new Date(card.releasedDate);
      const cardYear = cardDate.getUTCFullYear();

      // Mostrar películas desde el año especificado
      return cardYear >= filterYear;
    });
  }
}
