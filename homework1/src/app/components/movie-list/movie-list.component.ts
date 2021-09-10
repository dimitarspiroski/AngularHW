import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/helpers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() title = '';
  @Input() movieTitle = '';

  movie: Movie = {
    name: '',
    releaseDate: '',
    producerName: '',
    genre: '',
    rating: null,
  };

  getMovieData(movie: Movie) {
    this.movie = movie;
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.movieTitle);
  }
}
