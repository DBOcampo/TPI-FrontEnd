import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { List } from 'src/app/edulist';
import { LIST } from 'src/app/mock-edulist';


@Component({
  selector: 'edu-list',
  templateUrl: './edu-list.component.html',
  styleUrls: ['./edu-list.component.css']
})
export class EduListComponent implements OnInit {

  listI: List[] = LIST;
  enabled: boolean = false
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  @ViewChild('eduList') eduList: any

  constructor() { }

  ngOnInit(): void {
  }


  recieveEnable($event: boolean) {
    this.enabled = $event
    if (this.edtEnabled === true) {
      this.edtEnabled = false
    }
    console.log(this.edtEnabled)
  }

  enableEdit() {
    this.edtEnabled = !this.edtEnabled
  }

}
