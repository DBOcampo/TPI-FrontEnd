import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { proyect } from 'src/app/mocks/proyects';

@Component({
  selector: 'proyects-modal',
  templateUrl: './proyects-modal.component.html',
  styleUrls: ['./proyects-modal.component.css']
})
export class ProyectsModalComponent implements OnInit {
  @Output() newPy: EventEmitter<proyect> = new EventEmitter
  reader: FileReader = new FileReader
  imgurl!: string | ArrayBuffer | null
  nombre: string = ''
  descripcion!: string
  link!: string

  constructor() { }

  ngOnInit(): void {
  }

  fileUpdate(file: any) {
    let newImg;
    newImg = file.target.files[0]
    this.reader.onload = () => {
      let result = this.reader.result
      this.imgurl = result
    }
    this.reader.readAsDataURL(newImg)
  }

  onSubmit() {
    if (this.nombre.length === 0) {
      alert('Anada un nombre')
      return
    }
    const { imgurl, nombre, descripcion, link } = this
    const newSkills = { imgurl, nombre, descripcion, link }
    this.newPy.emit(newSkills)
    setTimeout(() => { this.imgurl = '', this.nombre = '', this.descripcion = '', this.link = '' }, 1)
  }
}
