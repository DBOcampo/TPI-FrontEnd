import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: string[] = []
  isLoggedIn: boolean = false
  admin: boolean = false
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      this.isLoggedIn = true;
      if (this.roles[0] === 'ROLE_USER' && this.roles[1] === undefined) {
        this.isLoggedIn = false
      }
      if (this.roles[0] === 'ROLE_ADMIN') {
        this.admin = true
        this.roles[0] = 'ADMIN'
      }
      console.log(this.roles)
    }
  }

}
