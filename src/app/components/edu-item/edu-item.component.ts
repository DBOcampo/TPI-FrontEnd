import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @Input() listL: List = LIST[0]
  enabled: boolean = true
  edtState: boolean = false
  edtEnabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  subscription!: Subscription;

  @ViewChild('eduList') eduList: any

  constructor(private renderer: Renderer2, private elementRef: ElementRef,
    private data: EduDataServiceService, private data2: EduDataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentData.subscribe(state => this.enabled = state)
    this.subscription = this.data2.currentData2.subscribe(state => this.edtEnabled = state)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  enableEdit() {
    this.edtEnabled = !this.edtEnabled
  }

}