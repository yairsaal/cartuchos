import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  selectedPlayer: Player;

  players: Player[];

  confirmedPlayers: Player[];
  @Output() sendPlayers = new EventEmitter<Player[]>();

  constructor(private playerService: PlayerService) {
    this.confirmedPlayers = [];
  }

  ngOnInit() {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  onChecked(player: Player, checkbox: HTMLFormElement): void {
    const thisPlayer = this.confirmedPlayers.findIndex(x => x.id === player.id);
    if (checkbox.checked) {
      this.confirmedPlayers.push(player);
    } else {
      this.confirmedPlayers.splice(thisPlayer, 1);
    }
    this.confirmedPlayers.sort();
  }

  onAccept() {
    const _confirmedPlayers = this.players.filter(player => player.chosen);
    this.sendPlayers.emit(_confirmedPlayers);
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }
}
