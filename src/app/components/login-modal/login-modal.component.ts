import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  edit: boolean = false
  usuario: string = ''
  contrasena: string = ''

  constructor(private editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  login() {
    if (this.usuario.length === 0) {
      alert("Add an Usuario")
      return
    }
    this.editData.changeData(true)
    setTimeout(() => { this.usuario = '', this.contrasena = '' }, 1)
  }

}
