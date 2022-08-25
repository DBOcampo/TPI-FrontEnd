import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/mocks/edulist';
import { Subscription } from 'rxjs';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { CancelEventService } from 'src/app/services/cancel-event.service';

@Component({
  selector: 'edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit, OnDestroy {

  @Input() listL!: List;
  oldList!: List
  @Output() onDeleteList: EventEmitter<List> = new EventEmitter;
  @Output() onEditList: EventEmitter<List> = new EventEmitter;
  enabled: boolean = false
  newValues!: List
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  subscription!: Subscription;
  clickEventsubscription: Subscription;

  constructor(private data: EduDataServiceService, private data2: EduDataServiceService,
    private cancelEvent: CancelEventService) {

    this.clickEventsubscription = this.cancelEvent.getClickEvent().subscribe(() => {
      this.cancelEdit();
    })
  }

  ngOnInit(): void {
    this.oldList = this.listL
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtEnabled = state)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  enableEdit() {
    this.edtEnabled = !this.edtEnabled
    console.log(this.listL, this.oldList)
    console.log(this.edtEnabled, 'from item')
  }

  sendEdit(i: string, t: string, p: string) {
    this.newValues = { id: this.listL.id, institucion: i, titulo: t, periodo: p }
    this.onEditList.emit(this.newValues)
    this.oldList.institucion = i
    this.oldList.titulo = t
    this.oldList.periodo = p
  }

  delEdu(list: List) {
    this.onDeleteList.emit(list)
  }

  cancelEdit() {
    console.log(this.oldList)
    this.oldList.institucion = this.oldList.institucion + ' '
    this.oldList.titulo = this.oldList.titulo + ' '
    this.oldList.periodo = this.oldList.periodo + ' '
    this.listL.institucion = this.oldList.institucion
    this.listL.titulo = this.oldList.titulo
    this.listL.periodo = this.oldList.periodo
    setTimeout(() => {
      this.listL.institucion = this.oldList.institucion.slice(0, -1)
      this.listL.titulo = this.oldList.titulo.slice(0, -1)
      this.listL.periodo = this.oldList.periodo.slice(0, -1)
      this.oldList.institucion = this.listL.institucion
      this.oldList.titulo = this.listL.titulo
      this.oldList.periodo = this.listL.periodo
    }, 0);
  }

}