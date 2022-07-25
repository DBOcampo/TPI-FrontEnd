import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  ubication: string = 'Buenos Aires, Argentina'
  age: number = 22
  aboutme: string = 'Entusiasta de la programación y de la tecnología en general, mi meta es crear aplicaciones y programas para ayudar a la gente a tener fácil acceso a las cosas que parecen complicadas de la tecnología'
  enabled: boolean = false
  editable: object = {'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block'};

  constructor() { }

  ngOnInit(): void {
  }

  recieveEnable($event:boolean){
    this.enabled = $event
    console.log("Recive works!")
    console.log(this.enabled)
  }

}
