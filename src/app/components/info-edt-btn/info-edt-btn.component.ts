import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edt-btn',
  templateUrl: './info-edt-btn.component.html',
  styleUrls: ['./info-edt-btn.component.css']
})
export class InfoEdtBtnComponent implements OnInit {
  isActive: boolean = false
  state: string = 'Editar'

  @Output() enableEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  enableEdit() {
    this.isActive = !this.isActive
    this.state = this.isActive ? 'Cerrar' : 'Editar'
    this.enableEvent.emit(this.isActive)
  }

}
