import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { PLAYERS } from './mocks/mock-players';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    // TODO: send the message _after_ fetching the players
    this.messageService.add('Seleccione un jugador para editar su nombre o apodo');
    return of(PLAYERS);
  }
}
