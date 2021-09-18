import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  descriptionShown = false;

  toggleDescription() {
    this.descriptionShown = !this.descriptionShown;
  }

  constructor() {}

  ngOnInit(): void {}
}
