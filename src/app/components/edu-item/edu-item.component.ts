import { Component, Input, OnDestroy, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  subscription!: Subscription;

  constructor(private data: EduDataServiceService, private data2: EduDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtEnabled = state)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  enableEdit(i: string, t: string, p: string) {
    this.edtEnabled = !this.edtEnabled
    const newValues: List = { id: this.listL.id, institucion: i, titulo: t, periodo: p }
    console.log(this.edtEnabled, 'from item')
    this.onEditList.emit(newValues)
  }

  delEdu(list: List) {
    this.onDeleteList.emit(list)
  }
}