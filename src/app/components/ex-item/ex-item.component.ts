import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { exList } from 'src/app/mocks/exlist';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { CancelEventService } from 'src/app/services/cancel-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ex-item',
  templateUrl: './ex-item.component.html',
  styleUrls: ['./ex-item.component.css']
})
export class ExItemComponent implements OnInit {
  @Output() onEditList: EventEmitter<exList> = new EventEmitter
  @Output() deleteList: EventEmitter<exList> = new EventEmitter
  @Input() list!: exList
  oldList!: exList
  enabled: boolean = false
  newValues!: exList
  btnEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  clickEventsubscription: Subscription;

  constructor(private data: EduDataServiceService, private data2: EduDataServiceService,
    private cancelEvent: CancelEventService) {

    this.clickEventsubscription = this.cancelEvent.getClickEvent().subscribe(() => {
      this.cancelEdit();
    })

  }

  ngOnInit(): void {
    this.oldList = this.list
    this.data.currentData.subscribe(d => this.enabled = d)
    this.data2.currentData2.subscribe(d => this.btnEnabled = d)
  }

  btnEnable() {
    this.btnEnabled = !this.btnEnabled

  }

  sendEdit(e: string, p: string, pe: string) {
    this.newValues = { id: this.list.id, empresa: e, puesto: p, periodo: pe }
    if (this.enabled === true) {
      this.onEditList.emit(this.newValues)
      this.oldList.empresa = e
      this.oldList.puesto = p
      this.oldList.periodo = pe
    }
  }

  delList(list: exList) {
    this.deleteList.emit(list)
  }

  cancelEdit() {
    this.oldList.empresa = this.oldList.empresa + ' '
    this.oldList.puesto = this.oldList.puesto + ' '
    this.oldList.periodo = this.oldList.periodo + ' '
    this.list.empresa = this.oldList.empresa
    this.list.puesto = this.oldList.puesto
    this.list.periodo = this.oldList.periodo
    setTimeout(() => {
      this.list.empresa = this.oldList.empresa.slice(0, -1)
      this.list.puesto = this.oldList.puesto.slice(0, -1)
      this.list.periodo = this.oldList.periodo.slice(0, -1)
      this.oldList.empresa = this.list.empresa
      this.oldList.puesto = this.list.puesto
      this.oldList.periodo = this.list.periodo
    }, 0);
  }
}
