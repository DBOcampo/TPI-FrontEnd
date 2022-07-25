import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLoginBtnComponent } from './components/navbar-login-btn/navbar-login-btn.component';
import { MainComponent } from './components/main/main.component';
import { MainChangepfpComponent } from './components/main-changepfp/main-changepfp.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { InfoEdtBtnComponent } from './components/info-edt-btn/info-edt-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLoginBtnComponent,
    MainComponent,
    MainChangepfpComponent,
    MainInfoComponent,
    LoginModalComponent,
    InfoCardComponent,
    InfoEdtBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
