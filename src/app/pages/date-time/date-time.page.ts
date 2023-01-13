import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

  cambiarFecha(event:any){
    console.log(event);
    console.log(event.detail.value)
  }
}
