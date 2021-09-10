import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/helpers';

const movie: Movie = {
  name: 'The Joker',
  releaseDate: '2019',
  producerName: 'Todd Philips',
  genre: 'Thriller',
  rating: 9,
};

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() title = '';
  @Output() sendMovieToParent: EventEmitter<Movie> = new EventEmitter<Movie>();

  showMovie() {
    this.sendMovieToParent.emit(movie);
  }

  constructor() {}

  ngOnInit(): void {}
}
