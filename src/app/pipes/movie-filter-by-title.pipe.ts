// filter-by-title.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/app/types/movie.types';

@Pipe({
  name: 'filterByTitle',
})
export class MovieFilterByTitlePipe implements PipeTransform {
  transform(cards: Movie[], filterTitle: any): Movie[] {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(filterTitle.toLowerCase())
    );
  }
}
