import { Component, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/services/login-data.service';
import { Image } from 'src/app/mocks/images';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  edit: boolean = false
  reader: any = new FileReader();
  imgDB!: Image[]
  oldimg!: string
  edtEnabled: boolean = false
  img: string = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  newFiles: any = ''

  constructor(private editData: LoginDataService, private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getImg().subscribe((img) => {
      this.imgDB = img
      this.oldimg = this.imgDB[1].img
      this.img = this.imgDB[1].img
    })
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

  edtEnable() {
    this.edtEnabled = !this.edtEnabled
  }

  saveImg() {
    const newImg = {
      "id": this.imgDB[1].id,
      "img": this.img
    }
    this.mainService.saveImg(newImg).subscribe()
    this.oldimg = this.img
  }

  cancelImg() {
    this.img = this.oldimg
  }


}
