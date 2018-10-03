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
    if (checkbox.checked) {
      this.confirmedPlayers.push(player);
      this.sendPlayers.emit(this.confirmedPlayers);
    } else {
      this.confirmedPlayers.splice(player.id, 1);
      this.sendPlayers.emit(this.confirmedPlayers);
    }
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }
}
