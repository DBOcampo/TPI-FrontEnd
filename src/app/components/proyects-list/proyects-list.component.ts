import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';
import { ProyectsDataService } from 'src/app/services/proyects-data.service';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'proyects-list',
  templateUrl: './proyects-list.component.html',
  styleUrls: ['./proyects-list.component.css']
})
export class ProyectsListComponent implements OnInit {

  proyectos!: proyect[]
  enabled: boolean = false

  constructor(private pyData: ProyectsService, private pyNewData: ProyectsDataService) { }

  ngOnInit(): void {

    this.pyData.getPy().subscribe((py) => this.proyectos = py)
  }

  recieveEnable(data: boolean) {
    this.enabled = data
    this.pyNewData.changeBtnData(data)
    if (this.enabled === false) {
      this.pyNewData.changeEdtBtnData(false)
    }
    console.log(this.enabled)
  }

  delPy(py: proyect) {
    this.pyData.delPy(py).subscribe(() => this.proyectos = this.proyectos.filter((t) => t.id !== py.id))
  }

  addPy(py: proyect) {
    this.pyData.addPy(py).subscribe((py) => this.proyectos.push(py))
  }

  editPy(py: proyect) {
    this.pyData.editPy(py).subscribe()
  }
}
