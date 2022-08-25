import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio'
  content!: string;
  form = { "username": "user", "password": "123456789" }
  errorMessage = ''
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit() {
    if (this.tokenStorage.getToken() === null) {
      this.authService.login(this.form).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          window.location.reload();
        },
        err => {
          this.errorMessage = err.error.message;
        }
      );
    }
  }
}
