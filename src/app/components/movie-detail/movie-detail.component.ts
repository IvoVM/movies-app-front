import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Movie } from 'src/app/types/movie.types';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MoviesData } from 'src/app/utils/moviesData';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  @Input() id?: string;
  @Input() title!: string;
  isLoading = true;

  movieData!: Movie | undefined;

  constructor(
    private getDataService: GetDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (this.id && this.title) {
      this.getDataService.getMovieById(this.id).subscribe({
        next: (res: Movie) => {
          this.movieData = res;
          this.isLoading = false;
        },
        error: (err) => {
          this.movieData = this.findMovieByTitle(this.title);
          this.isLoading = false;
          console.log(err);
        },
      });
    }
  }

  findMovieByTitle(title: string): Movie | undefined {
    return MoviesData.find((movie) => movie.title === title);
  }

  getRatingColor(rating: number): string {
    if (rating < 5.0) {
      return 'red';
    } else if (rating >= 5.0 && rating < 7.5) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  getEmbeddedVideoUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }

  extractVideoId(url: string): string {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : '';
  }

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
