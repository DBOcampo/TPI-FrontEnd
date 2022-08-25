import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.css']
})
export class LogoutBtnComponent implements OnInit {
  edit: boolean = false
  constructor(public editData: LoginDataService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  logout() {
    this.tokenStorageService.signOut();
    this.editData.changeData(false)
    window.location.reload();
  }

}
