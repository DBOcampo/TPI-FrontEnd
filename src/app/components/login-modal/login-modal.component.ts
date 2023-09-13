import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  edit: boolean = false
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private editData: LoginDataService, private authService: AuthService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // this.editData.changeData(true) /// REMEMBER TO REMOVE THIS!!!!!!!!!!!!!!!!!!!
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      this.isLoggedIn = true;
      if (this.roles[0] === 'ROLE_USER' && this.roles[1] === undefined) {
        this.isLoggedIn = false
      }
      if (this.roles[0] === 'ROLE_ADMIN') {
        this.editData.changeData(true)
      }
    }
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data)
        this.editData.changeData(true)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.tokenStorage.getUser().roles)
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
