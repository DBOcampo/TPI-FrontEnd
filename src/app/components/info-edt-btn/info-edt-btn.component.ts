import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edt-btn',
  templateUrl: './info-edt-btn.component.html',
  styleUrls: ['./info-edt-btn.component.css']
})
export class InfoEdtBtnComponent implements OnInit {
  @Input() isActive: boolean = false

  @Output() enableEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  enableEdit() {
    this.isActive = !this.isActive
    this.enableEvent.emit(this.isActive)
  }

}
