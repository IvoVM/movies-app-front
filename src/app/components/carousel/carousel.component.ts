import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/types/movie.types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() bannerResult!: Movie[];
}
