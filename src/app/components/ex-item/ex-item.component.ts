import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'src/app/mocks/edulist';
import { exList } from 'src/app/mocks/exlist';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';

@Component({
  selector: 'ex-item',
  templateUrl: './ex-item.component.html',
  styleUrls: ['./ex-item.component.css']
})
export class ExItemComponent implements OnInit {
  @Output() onEditList: EventEmitter<exList> = new EventEmitter
  @Output() deleteList: EventEmitter<exList> = new EventEmitter
  @Input() list!: exList
  enabled: boolean = false
  newValues!: exList
  btnEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  constructor(private data: EduDataServiceService, private data2: EduDataServiceService) { }

  ngOnInit(): void {
    this.data.currentData.subscribe(d => this.enabled = d)
    this.data2.currentData2.subscribe(d => this.btnEnabled = d)
  }

  btnEnable(e: string, p: string, pe: string) {
    this.btnEnabled = !this.btnEnabled
    this.newValues = { id: this.list.id, empresa: e, puesto: p, periodo: pe }
    if (this.enabled === true) {
      this.onEditList.emit(this.newValues)
    }
  }

  delList(list: exList) {
    console.log(list, 'from item')
    this.deleteList.emit(list)
  }

}
