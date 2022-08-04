import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { Subscription } from 'rxjs';
import { List } from 'src/app/mocks/edulist';

@Component({
  selector: 'edu-modal',
  templateUrl: './edu-modal.component.html',
  styleUrls: ['./edu-modal.component.css']
})
export class EduModalComponent implements OnInit {

  @Output() onNewList: EventEmitter<List> = new EventEmitter

  institucion: string = ''
  titulo: string = ''
  periodo: string = ''
  submitting!: boolean;
  listUL: any
  subscription!: Subscription

  constructor(private list: EduDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.list.currentData.subscribe(a => this.listUL = a)
  }

  submit(): void {
    if (this.institucion.length === 0) {
      alert("Please add a Institucion")
      return
    }
    const { institucion, titulo, periodo } = this
    const newList = { institucion, titulo, periodo }
    this.onNewList.emit(newList)
    console.log(newList, 'from modal')
    setTimeout(() => { this.institucion = '', this.titulo = '', this.periodo = '' }, 1)
  }

  clearipts() {
    this.institucion = '', this.titulo = '', this.periodo = ''
  }

}
