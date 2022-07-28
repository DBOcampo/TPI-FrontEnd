import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EduDataServiceService } from 'src/app/services/edu-data-service.service';

@Component({
  selector: 'edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit, OnDestroy {

  enabled: boolean = true
  edtState: boolean = false
  subscription!: Subscription
  constructor(private data: EduDataServiceService, private data2: EduDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtState = state)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  recieveEnable($event: boolean) {
    this.enabled = $event
    this.data.changeData(this.enabled)
    if (this.enabled === false) {
      this.data2.changeData2(false)
    }
  }

}
