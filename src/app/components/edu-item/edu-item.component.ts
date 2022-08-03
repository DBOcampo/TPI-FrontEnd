import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { LIST } from 'src/app/mock-edulist';
import { List } from 'src/app/edulist';
import { Subscription } from 'rxjs';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';

@Component({
  selector: 'edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit, OnDestroy {

  @Input() listL: List = LIST[0];
  @Output() onDeleteList: EventEmitter<List> = new EventEmitter;
  @Output() onEditList: EventEmitter<List> = new EventEmitter;
  enabled: boolean = false
  newValues!: List
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  subscription!: Subscription;

  constructor(private data: EduDataServiceService, private data2: EduDataServiceService, private data3: EduDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtEnabled = state)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  enableEdit(i: string, t: string, p: string) {
    this.edtEnabled = !this.edtEnabled
    this.newValues = { id: this.listL.id, institucion: i, titulo: t, periodo: p }
    if (this.enabled === true) {
      this.onEditList.emit(this.newValues)
      console.log(this.newValues, 'from ITEM')
    }
    console.log(this.edtEnabled, 'from item')
  }

  delEdu(list: List) {
    this.onDeleteList.emit(list)
  }

}