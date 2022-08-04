import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { exList } from 'src/app/mocks/exlist';

@Component({
  selector: 'ex-modal',
  templateUrl: './ex-modal.component.html',
  styleUrls: ['./ex-modal.component.css']
})
export class ExModalComponent implements OnInit {

  @Output() onAddList: EventEmitter<exList> = new EventEmitter

  empresa: string = ''
  puesto: string = ''
  periodo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.empresa.length === 0) {
      alert("Please add a Empresa")
      return
    }
    const { empresa, puesto, periodo } = this
    const newList = { empresa, puesto, periodo }
    this.onAddList.emit(newList)
    setTimeout(() => { this.empresa = '', this.puesto = '', this.periodo = '' }, 1)
  }

  clearIpts() {
    this.empresa = '', this.puesto = '', this.periodo = ''
  }

}
