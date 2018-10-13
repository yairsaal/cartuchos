import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Formation } from '../formation';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit, AfterViewInit {
  @Input() formation: Formation;
  // @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('myCanvas2') myCanvas2: ElementRef;
  // private context: CanvasRenderingContext2D;
  private context2: CanvasRenderingContext2D;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');

    // this.context.beginPath();
    // this.context.moveTo(0, 0);
    // this.context.lineTo(1000, 500);
    // this.context.moveTo(1000, 0);
    // this.context.lineTo(0, 500);
    // this.context.moveTo(575, 250);
    // this.context.arc(500, 250, 75, 0, Math.PI * 2);
    // this.context.moveTo(250, 10);
    // this.context.lineTo(280, 50);
    // this.context.lineTo(310, 10);
    // this.context.moveTo(280, 50);
    // this.context.lineTo(280, 100);
    // this.context.stroke();
    // this.context.font = '100px Arial';
    // this.context.strokeText('CANVAS', 300, 450);

    this.context2 = (<HTMLCanvasElement>this.myCanvas2.nativeElement).getContext('2d');

    this.context2.beginPath();
    this.context2.moveTo(500, 0);
    this.context2.lineTo(500, 500);
    this.context2.moveTo(600, 250);
    this.context2.arc(500, 250, 100, 0, Math.PI * 2);
    this.context2.moveTo(200, 175);
    this.context2.arc(200, 250, 75, 3 * Math.PI / 2, Math.PI / 2);
    this.context2.moveTo(800, 175);
    this.context2.arc(800, 250, 75, 3 * Math.PI / 2, Math.PI / 2, true);
    this.context2.strokeRect(0, 100, 200, 300);
    this.context2.strokeRect(800, 100, 200, 300);
    this.context2.strokeRect(0, 150, 100, 200);
    this.context2.strokeRect(900, 150, 100, 200);
    this.context2.stroke();
  }

}
