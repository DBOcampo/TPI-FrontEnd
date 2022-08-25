import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';
import { List } from 'src/app/mocks/edulist';
import { LoginDataService } from 'src/app/services/login-data.service';
import { CancelEventService } from 'src/app/services/cancel-event.service';

@Component({
  selector: 'edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit, OnDestroy {
  newList!: List
  edit: boolean = false
  enabled: boolean = true
  edtState: boolean = false
  subscription!: Subscription
  constructor(private data: EduDataServiceService, private data2: EduDataServiceService,
    private editData: LoginDataService, private cancelEvent: CancelEventService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtState = state)
    this.editData.currentData.subscribe((data) => {
      this.edit = data
      if (data === false) {
        this.data2.changeData(false)
        this.data2.changeData2(false)
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  recieveEnable(infoEnable: boolean) {
    if (this.enabled === true) {
      this.data2.changeData2(false)
      this.cancelEvent.sendClickEvent();
    }
    this.enabled = infoEnable
    this.data.changeData(this.enabled)
  }

}
