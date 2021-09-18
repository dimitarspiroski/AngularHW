import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  games: Game[] = [
    {
      id: 'deathloop',
      title: 'Deathloop',
      releaseDate: new Date(2021, 9, 14),
      rating: 0.75,
      price: 59.99,
      shortDescription:
        'The only thing missing in this Dishonored/Edge of Tomorrow offspring is Tom Cruise.',
      genre: 'FPS',
      publisher: 'Bethesda Softworks',
      developer: 'Arkane Studios',
    },
    {
      id: 'katana-zero',
      title: 'Katana Zero',
      releaseDate: new Date(2019, 4, 18),
      rating: 0.9,
      price: 12.49,
      shortDescription:
        'Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display.',
      genre: 'Action',
      publisher: 'Devolver Digital',
      developer: 'Askiisoft',
    },
    {
      id: 'valheim',
      title: 'Valheim',
      releaseDate: new Date(2021, 2, 2),
      rating: 0.8,
      price: 15.99,
      shortDescription:
        'The devs are probably still drinking the champagne from the early success, hence the lack of content. Otherwise pretty epic experience, especially with friends.',
      genre: 'Survival',
      publisher: 'Coffee Stain Studios',
      developer: 'Iron Gate AB',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
