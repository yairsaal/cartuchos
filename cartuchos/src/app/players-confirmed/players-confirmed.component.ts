import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players-confirmed',
  templateUrl: './players-confirmed.component.html',
  styleUrls: ['./players-confirmed.component.css']
})
export class PlayersConfirmedComponent implements OnInit, OnChanges {

  @Input() confirmedPlayers: Player[];

 constructor() {}

  ngOnInit() {
    this.getConfirmedPlayers();
  }

  getConfirmedPlayers(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
