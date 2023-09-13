import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  private editSource = new BehaviorSubject(false);
  currentData = this.editSource.asObservable();
  
  constructor() { }

  changeData(data: boolean) {

    this.editSource.next(data)
  }
}
