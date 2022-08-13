import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';
import { ProyectsDataService } from 'src/app/services/proyects-data.service';

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
  cool!: string
  enabled: boolean = false
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  constructor(private pyData: ProyectsDataService) { }

  ngOnInit(): void {
    this.pyData.currentBtnData.subscribe((d) => {
      this.enabled = d
      if (this.enabled === false) {
        this.edtEnabled = false
      }
    })

    this.cool = `a${this.py.id}`
  }

  edtEnable(nombre: string, descripcion: string,) {
    this.edtEnabled = !this.edtEnabled
    if (this.edtEnabled === false) {
      const newValue: proyect = { imgurl: this.py.imgurl, nombre: nombre, descripcion: descripcion, link: this.link }
      this.py.imgurl = newValue.imgurl, this.py.nombre = newValue.nombre,
        this.py.descripcion = newValue.descripcion, this.py.link = newValue.link
      this.onEditPy.emit(this.py)
    }
  }

  delPy(py: proyect) {
    this.onDeletePy.emit(py)
  }

  updateImage(file: any) {
    let newImg
    newImg = file.target.files[0]
    console.log(newImg)
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
}
