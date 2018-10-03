import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { NgbRadio, NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap/buttons/radio';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { PlayersConfirmedComponent } from './players-confirmed/players-confirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent,
    FormationsComponent,
    FormationDetailComponent,
    PlayersConfirmedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
