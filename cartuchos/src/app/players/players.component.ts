import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mocks/mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;

  selectedPlayer: Player;
  onEditMode = false;
  constructor() {
    this.selectedPlayer = {
      name: '',
      nickName: '',
      id: null
    };
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  edit(player: Player): void {
    this.onEditMode = !this.onEditMode;
  }


  ngOnInit() {
  }

}
