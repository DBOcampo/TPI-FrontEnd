import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';
import { CancelEventService } from 'src/app/services/cancel-event.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { ProyectsDataService } from 'src/app/services/proyects-data.service';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'proyects-list',
  templateUrl: './proyects-list.component.html',
  styleUrls: ['./proyects-list.component.css']
})
export class ProyectsListComponent implements OnInit {
  edit: boolean = false
  proyectos!: proyect[]
  enabled: boolean = false

  constructor(private pyData: ProyectsService, private pyNewData: ProyectsDataService,
    private editData: LoginDataService, private cancelEvent: CancelEventService) { }

  ngOnInit(): void {

    this.pyData.getPy().subscribe((py) => this.proyectos = py)
    this.editData.currentData.subscribe((data) => {
      this.edit = data
      if (data === false) {
        this.pyNewData.changeEdtBtnData(false)
        this.pyNewData.changeBtnData(false)
      }
    })
    this.pyNewData.currentBtnData.subscribe(d => this.enabled = d)
  }

  recieveEnable(data: boolean) {
    this.enabled = data
    this.pyNewData.changeBtnData(data)
    if (this.enabled === false) {
      this.pyNewData.changeEdtBtnData(false)
      this.cancelEvent.sendClickEvent();
    }
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
