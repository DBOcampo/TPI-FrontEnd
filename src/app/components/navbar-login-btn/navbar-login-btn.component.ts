import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'login-btn',
  templateUrl: './navbar-login-btn.component.html',
  styleUrls: ['./navbar-login-btn.component.css']
})
export class NavbarLoginBtnComponent implements OnInit {
  edit!: boolean
  constructor(private editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = !data)
  }

  login(): void {
    this.editData.changeData(true)
  }

}
