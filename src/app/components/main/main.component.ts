import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  edit: boolean = false
  reader: any = new FileReader();
  img: string = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  newFiles: any = ''

  constructor(private editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  changeImg(files: any) {
    this.newFiles = files
    this.reader.onload = () => {
      var result = this.reader.result;
      this.img = result
    }
    this.reader.readAsDataURL(this.newFiles.files[0])
  }


}
