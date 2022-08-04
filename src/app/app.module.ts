import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
import { EduComponent } from './components/edu/edu.component';
import { EduListComponent } from './components/edu-list/edu-list.component';
import { EduModalComponent } from './components/edu-modal/edu-modal.component';
import { EduItemComponent } from './components/edu-item/edu-item.component';
import { ExListComponent } from './components/ex-list/ex-list.component';
import { ExItemComponent } from './components/ex-item/ex-item.component';
import { ExModalComponent } from './components/ex-modal/ex-modal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillHSComponent } from './components/skill-hs/skill-hs.component';
import { SkillHSItemComponent } from './components/skill-hs-item/skill-hs-item.component';
import { SkillHsModalComponent } from './components/skill-hs-modal/skill-hs-modal.component';

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
    InfoEdtBtnComponent,
    EduComponent,
    EduListComponent,
    EduModalComponent,
    EduItemComponent,
    ExListComponent,
    ExItemComponent,
    ExModalComponent,
    SkillsComponent,
    SkillHSComponent,
    SkillHSItemComponent,
    SkillHsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
