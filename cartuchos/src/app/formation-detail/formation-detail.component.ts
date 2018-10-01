import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../formation';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  @Input() formation: Formation;

  ngOnInit() {
  }

}
