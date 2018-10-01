import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Formation } from './formation';
import { FORMATIONS } from './mocks/mock-formations';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private messageService: MessageService) { }

    getFormations(): Observable<Formation[]> {
      // TODO: send the message _after_ fetching the formation
      this.messageService.add('Seleccione una formación para verla');
      return of(FORMATIONS);
  }
}
