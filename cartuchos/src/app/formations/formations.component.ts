import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  selectedFormation: Formation;

  formations: Formation[];

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.getFormations();
  }

  onSelect(formation: Formation): void {
    this.selectedFormation = formation;
  }

  getFormations(): void {
    this.formationService.getFormations()
      .subscribe(formations => this.formations = formations);
  }
}
