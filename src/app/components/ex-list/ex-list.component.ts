import { Component, OnInit, Output } from '@angular/core';
import { List } from 'src/app/mocks/edulist';
import { exList } from 'src/app/mocks/exlist';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { ExListService } from 'src/app/services/ex-list.service';

@Component({
  selector: 'ex-list',
  templateUrl: './ex-list.component.html',
  styleUrls: ['./ex-list.component.css']
})
export class ExListComponent implements OnInit {

  enabled: boolean = false

  list: exList[] = []

  constructor(private exListData: ExListService, private data: EduDataServiceService) { }

  ngOnInit(): void {
    this.exListData.getList().subscribe((list) => { this.list = list })
    this.data.currentData.subscribe((d) => this.enabled = d)
  }

  deleteList(list: exList): void {
    this.exListData.deleteList(list).subscribe(() =>
      this.list = this.list.filter(t => t.id !== list.id)
    )
  }

  addList(list: exList): void {
    this.exListData.addList(list).subscribe((list) => {
      this.list.push(list)
    })
  }

  editList(list: exList) {
    this.exListData.editList(list).subscribe()
  }
}
