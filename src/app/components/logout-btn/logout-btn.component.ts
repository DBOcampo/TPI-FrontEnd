import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {
  edit: boolean = false
  constructor(public editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  logout() {
    this.editData.changeData(!this.edit)
  }

}
