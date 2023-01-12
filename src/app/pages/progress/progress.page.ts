import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.5;


  constructor() { }

  ngOnInit() {
  }

  rangeChange( event: any){
    this.porcentaje = event.detail.value / 100;
  }

}
