import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { EduListService } from 'src/app/services/edu-list.service';
import { List } from 'src/app/edulist';

@Component({
  selector: 'edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit, OnDestroy {
  newList!: List
  enabled: boolean = true
  edtState: boolean = false
  subscription!: Subscription
  constructor(private data: EduDataServiceService, private data2: EduDataServiceService, private list: EduListService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtState = state)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  recieveEnable(infoEnable: boolean) {
    if (this.enabled === true) {
      this.data2.changeData2(false)
    }
    this.enabled = infoEnable
    this.data.changeData(this.enabled)
    try {
      if (this.enabled !== true) {
        this.list.editList(this.newList).subscribe
        console.log('new list sent!!!')
      }
    }
    catch {
      return
    }
  }

  console(a: List) {
    this.newList = a
    console.log(this.newList, 'FROM EDU console')
  }

}
