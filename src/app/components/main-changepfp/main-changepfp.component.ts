import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';

@Component({
  selector: 'changepfp',
  templateUrl: './main-changepfp.component.html',
  styleUrls: ['./main-changepfp.component.css']
})
export class MainChangepfpComponent implements OnInit {
  edit: boolean = false
  reader: any = new FileReader();
  img: string = 'https://i.ibb.co/0VhyZFv/hack.webp'
  newFiles: any = ''

  constructor(private editData: LoginDataService) { }

  ngOnInit(): void {
    this.editData.currentData.subscribe(data => this.edit = data)
  }

  changePfp(files: any) {
    this.newFiles = files
    this.reader.onload = () => {
      var result = this.reader.result;
      this.img = result
    }
    this.reader.readAsDataURL(this.newFiles.files[0])
  }

}
