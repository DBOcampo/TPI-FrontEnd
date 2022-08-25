import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { MainInfoService } from 'src/app/services/main-info.service';
import { mInfo } from 'src/app/mocks/mainInfo';

@Component({
  selector: 'main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  edit: boolean = false;
  info!: mInfo[];
  oldInfo: mInfo[] = this.info
  oldInfoItem!: string;
  oldInfoItem2!: string;
  name: string = 'Dylan Benjamin Ocampo';
  ocupacion: string = 'Estudiante de programacion';
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  isActive: boolean = false;
  constructor(private editData: LoginDataService, private mainInfo: MainInfoService) { }

  ngOnInit(): void {
    this.mainInfo.getInfo().subscribe((info) => {
      this.info = info
      this.oldInfo = info
      this.oldInfoItem = info[0].nombre
      this.oldInfoItem2 = info[0].ocupacion
      this.name = info[0].nombre
      this.ocupacion = info[0].ocupacion
      console.log(this.info)
    })
    this.editData.currentData.subscribe((data) => {
      this.edit = data
      console.log(data, 'from subscription main info')
      if (data === false) {
        this.isActive = false
      }
    })
  }

  enableEditName() {
    this.isActive = !this.isActive
    console.log(this.isActive)
  }

  saveEdit(n: string, o: string) {
    const newValues = { id: this.info[0].id, nombre: n, ocupacion: o }
    this.mainInfo.saveInfo(newValues).subscribe()
    this.oldInfoItem = n
    this.oldInfoItem2 = o
  }

  cancelEdit() {
    this.oldInfoItem = this.oldInfoItem + ' '
    this.oldInfoItem2 = this.oldInfoItem2 + ' '
    this.name = this.oldInfoItem
    this.ocupacion = this.oldInfoItem2
    setTimeout(() => {
      this.name = this.oldInfoItem.slice(0, -1)
      this.ocupacion = this.oldInfoItem2.slice(0, -1)
      this.oldInfoItem = this.name
      this.oldInfoItem2 = this.ocupacion
    }, 0);
  }
}
