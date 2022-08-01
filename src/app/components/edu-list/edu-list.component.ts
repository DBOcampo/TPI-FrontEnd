import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { EduListService } from 'src/app/services/edu-list.service';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { List } from 'src/app/edulist';


@Component({
  selector: 'edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {

  @Output() onEdit: EventEmitter<List> = new EventEmitter

  listI: List[] = [];
  enabled: boolean = true
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  constructor(private listData: EduListService, private data: EduDataServiceService, private data2: EduDataServiceService) { }

  ngOnInit(): void {
    this.listData.getList().subscribe((list) => {
      this.listI = list
    })
    this.data.currentData.subscribe(d => this.enabled = d)
    this.data2.currentData2.subscribe(d => this.edtEnabled = d)
  }

  enableEdit() {
    this.edtEnabled = !this.edtEnabled
    console.log("changed edtEnabled to " + this.edtEnabled)
  }

  deleteList(list: List) {
    this.listData.deleteList(list).subscribe(() =>
      this.listI = this.listI.filter(t => t.id !== list.id))
  }

  addList(list: List) {
    this.listData.addList(list).subscribe((list) => this.listI.push(list))
  }

  editList(newValue: List) {
    this.edtEnabled = !this.edtEnabled
    this.listData.editList(newValue).subscribe()
    this.onEdit.emit(newValue)
  }
}
