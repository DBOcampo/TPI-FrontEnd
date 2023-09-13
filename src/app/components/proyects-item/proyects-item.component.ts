import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';
import { ProyectsDataService } from 'src/app/services/proyects-data.service';
import { Subscription } from 'rxjs';
import { CancelEventService } from 'src/app/services/cancel-event.service';

@Component({
  selector: 'proyects-item',
  templateUrl: './proyects-item.component.html',
  styleUrls: ['./proyects-item.component.css']
})
export class ProyectsItemComponent implements OnInit {
  link: string = 'https://'
  reader: FileReader = new FileReader
  img!: string | ArrayBuffer | null
  id!: number | undefined
  @Output() onSendImg: EventEmitter<string | ArrayBuffer | null> = new EventEmitter
  @Output() onDeletePy: EventEmitter<proyect> = new EventEmitter
  @Output() onEditPy: EventEmitter<proyect> = new EventEmitter
  @Input() py!: proyect
  oldNombre!: string
  oldDescripcion!: string
  oldLink!: string
  oldImgUrl!: string | ArrayBuffer | null
  cool!: string
  enabled: boolean = false
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  clickEventsubscription: Subscription;

  constructor(private pyData: ProyectsDataService, private cancelEvent: CancelEventService) {
    this.clickEventsubscription = this.cancelEvent.getClickEvent().subscribe(() => {
      this.cancelEdit();
    })
  }

  ngOnInit(): void {
    this.oldNombre = this.py.nombre
    this.oldDescripcion = this.py.descripcion
    this.oldLink = this.py.link
    this.oldImgUrl = this.py.imgurl
    this.pyData.currentBtnData.subscribe((d) => {
      this.enabled = d
      if (this.enabled === false) {
        this.edtEnabled = false
      }
    })

    this.cool = `a${this.py.id}`
  }

  edtEnable() {
    this.edtEnabled = !this.edtEnabled
  }

  delPy(py: proyect) {
    this.onDeletePy.emit(py)
  }

  updateImage(file: any) {
    let newImg
    newImg = file.target.files[0]
    this.reader.onload = () => {
      let result = this.reader.result
      this.py.imgurl = result
    }
    this.reader.readAsDataURL(newImg)
  }

  sendimg() {
    this.img = this.py.imgurl
    this.id = this.py.id
  }

  sendEdit(nombre: string, descripcion: string) {
    const newValue: proyect = { imgurl: this.py.imgurl, nombre: nombre, descripcion: descripcion, link: this.link }
    this.py.imgurl = newValue.imgurl, this.py.nombre = newValue.nombre,
      this.py.descripcion = newValue.descripcion, this.py.link = newValue.link
    this.onEditPy.emit(this.py)
    this.oldImgUrl = newValue.imgurl
    this.oldNombre = newValue.nombre
    this.oldDescripcion = newValue.descripcion
    this.oldLink = newValue.link
  }

  cancelEdit() {
    this.oldNombre = this.oldNombre + ' '
    this.oldDescripcion = this.oldDescripcion + ' '
    this.oldLink = this.oldLink + ' '
    this.py.imgurl = this.oldImgUrl
    this.py.nombre = this.oldNombre
    this.py.descripcion = this.oldDescripcion
    this.py.link = this.oldLink
    setTimeout(() => {
      this.py.nombre = this.oldNombre.slice(0, -1)
      this.py.descripcion = this.oldDescripcion.slice(0, -1)
      this.py.link = this.oldLink.slice(0, -1)
      this.oldNombre = this.py.nombre
      this.oldDescripcion = this.py.descripcion
      this.oldLink = this.py.link
    }, 0)
  }
}
