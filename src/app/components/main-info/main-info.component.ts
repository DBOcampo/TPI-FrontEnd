import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  name: string = 'Dylan Benjamin Ocampo';
  ocupacion: string = 'Estudiante de programación';
  editable: object = {'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block'};
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enableEditName(){
    this.isActive = !this.isActive 
    console.log(this.isActive)
  }
}
