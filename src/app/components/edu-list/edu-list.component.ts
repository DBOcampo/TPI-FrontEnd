import { Component, OnInit } from '@angular/core';
import { EduListService } from 'src/app/services/edu-list.service';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { List } from 'src/app/mocks/edulist';


@Component({
  selector: 'edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {

  listI: List[] = [];
  enabled: boolean = true
  newValue: List = this.listI[0]
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

  deleteList(list: List) {
    this.listData.deleteList(list).subscribe(() =>
      this.listI = this.listI.filter(t => t.id !== list.id))
  }

  addList(list: List) {
    console.log(list)
    console.log("ADD LIST")
    this.listData.addList(list).subscribe((list) => {
      console.log(list)
      this.listI.push(list)
      console.log(this.listI)
    })
  }

  editList(list: List) {
    this.listData.editList(list).subscribe()
  }

  cancel() {

  }
}
