import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';

@Component({
  selector: 'proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos!: proyect[]

  constructor() { }

  ngOnInit(): void {

  }

}
