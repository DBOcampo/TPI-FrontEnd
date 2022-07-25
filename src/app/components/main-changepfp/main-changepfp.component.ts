import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'changepfp',
  templateUrl: './main-changepfp.component.html',
  styleUrls: ['./main-changepfp.component.css']
})
export class MainChangepfpComponent implements OnInit {

  reader: any = new FileReader();
  img: string = 'https://i.ibb.co/0VhyZFv/hack.webp'
  newFiles: any = ''

  constructor() { }

  ngOnInit(): void {
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
