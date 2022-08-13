import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
  edit: boolean = false
  name: string = 'Dylan Benjamin Ocampo';
  ocupacion: string = 'Estudiante de programación';
  editable: object = { 'border': '1px solid', 'borderRadius': '6px', 'display': 'inline-block' };
  isActive: boolean = false;
  constructor(private editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  enableEditName() {
    this.isActive = !this.isActive
    console.log(this.isActive)
  }
}
