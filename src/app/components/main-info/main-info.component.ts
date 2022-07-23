import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  name: string = 'Dylan Benjamin Ocampo'
  ocupacion: string = 'Estudiante de programación'

  constructor() { }

  ngOnInit(): void {
  }

  enableEditName(){

  }
}
