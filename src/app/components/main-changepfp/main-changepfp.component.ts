import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/mocks/images';
import { LoginDataService } from 'src/app/services/login-data.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'changepfp',
  templateUrl: './main-changepfp.component.html',
  styleUrls: ['./main-changepfp.component.css']
})
export class MainChangepfpComponent implements OnInit {
  edit: boolean = false
  reader: any = new FileReader();
  imgDB!: Image[];
  img: string = ''
  oldimg: string = this.img //remember to change this img to actual img when save img is clicked
  newFiles: any = ''
  edtEnabled: boolean = false

  constructor(private editData: LoginDataService, private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getImg().subscribe((img) => {
      this.imgDB = img
      this.oldimg = this.imgDB[0].img
      this.img = this.imgDB[0].img
    })

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

  edtEnable() {
    this.edtEnabled = !this.edtEnabled
  }

  saveImg() {
    const newImg = {
      "id": this.imgDB[0].id,
      "img": this.img
    }
    this.mainService.saveImg(newImg).subscribe()
    this.oldimg = this.img
  }

  cancelImg() {
    this.img = this.oldimg
  }

}
