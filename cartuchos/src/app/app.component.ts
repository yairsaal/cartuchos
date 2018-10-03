import { Component } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cartuchos';
  confirmedPlayers: Player[];

  onSendPlayers(players: Player[]) {
    this.confirmedPlayers = players;
  }
}
