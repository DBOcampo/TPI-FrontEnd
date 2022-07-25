import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  reader: any = new FileReader();
  img: string = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  newFiles: any = ''

  constructor() { }

  ngOnInit(): void {
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
