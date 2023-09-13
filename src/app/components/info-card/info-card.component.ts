import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { infoCard } from 'src/app/mocks/infoCard';
import { InfoCardService } from 'src/app/services/info-card.service';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  edit: boolean = false
  infoCard!: infoCard[]
  oldUbication!: string
  oldAge!: string
  oldAboutme!: string
  ubication: string = 'Buenos Aires, Argentina'
  age: string = '22'
  aboutme: string = 'Entusiasta de la programación y de la tecnología en general, mi meta es crear aplicaciones y programas para ayudar a la gente a tener fácil acceso a las cosas que parecen complicadas de la tecnología'
  enabled: boolean = false
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };

  constructor(private editData: LoginDataService, private infoCardS: InfoCardService) { }

  ngOnInit(): void {
    this.infoCardS.getInfo().subscribe((info) => {
      this.infoCard = info
      this.oldUbication = info[0].ubicacion
      this.oldAge = info[0].edad
      this.oldAboutme = info[0].sobremi
      this.ubication = this.infoCard[0].ubicacion
      this.age = this.infoCard[0].edad
      this.aboutme = this.infoCard[0].sobremi
    })
    this.editData.currentData.subscribe((data) => {
      this.edit = data
      if (data === false) {
        this.enabled = false
      }
    })
  }

  recieveEnable($event: boolean) {
    this.enabled = $event
  }

  saveInfo(u: string, a: string, ab: string) {
    let newage = a
    const newValues = { id: this.infoCard[0].id, ubicacion: u, edad: newage, sobremi: ab }
    this.ubication = u
    this.age = newage
    this.aboutme = ab
    this.infoCardS.saveInfo(newValues).subscribe()
    this.oldUbication = this.ubication
    this.oldAge = this.age
    this.oldAboutme = this.aboutme
    this.enabled = !this.enabled
  }

  cancelEdit() {
    if (!this.enabled) {
      this.oldUbication = this.oldUbication + ' '
      this.oldAge = this.oldAge + ' '
      this.oldAboutme = this.oldAboutme + ' '
      this.ubication = this.oldUbication
      this.age = this.oldAge
      this.aboutme = this.oldAboutme
      setTimeout(() => {
        this.ubication = this.oldUbication.slice(0, -1)
        this.age = this.oldAge.slice(0, -1)
        this.aboutme = this.oldAboutme.slice(0, -1)
        this.oldUbication = this.ubication
        this.oldAge = this.age
        this.oldAboutme = this.aboutme
      }, 0);
    }
  }

}
