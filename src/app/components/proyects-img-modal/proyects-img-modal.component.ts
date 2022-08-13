import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'proyects-img-modal',
  templateUrl: './proyects-img-modal.component.html',
  styleUrls: ['./proyects-img-modal.component.css']
})
export class ProyectsImgModalComponent implements OnInit {

  @Input() img: string | ArrayBuffer | null = ''
  @Input() id!: string
  id2: string = "a2"

  constructor() { }

  ngOnInit(): void {
  }

}
