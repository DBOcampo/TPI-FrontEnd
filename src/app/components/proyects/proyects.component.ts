import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

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
