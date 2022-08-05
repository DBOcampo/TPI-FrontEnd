import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { skillidi } from 'src/app/mocks/skill-idi';

@Component({
  selector: 'skill-idi-modal',
  templateUrl: './skill-idi-modal.component.html',
  styleUrls: ['./skill-idi-modal.component.css']
})
export class SkillIdiModalComponent implements OnInit {

  @Output() onSubmit: EventEmitter<skillidi> = new EventEmitter
  idioma: string = ''
  porcentaje: number = 0
  color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.idioma.length === 0) {
      alert('Please add an Idioma')
      return
    }
    console.log({ i: this.idioma, p: this.porcentaje, c: this.color })
    const newValues = { idioma: this.idioma, porcentaje: this.porcentaje, color: this.color }
    setTimeout(() => { this.idioma = '', this.porcentaje = 0, this.color = '' }, 1)
    this.onSubmit.emit(newValues)
  }

  clearipts() {
    this.idioma = '', this.porcentaje = 0, this.color = ''
  }

}
