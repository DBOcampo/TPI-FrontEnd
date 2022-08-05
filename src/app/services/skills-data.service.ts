import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  private edtBtnSource = new BehaviorSubject(false);
  currentEdtBtnData = this.edtBtnSource.asObservable();

  private btnSource = new BehaviorSubject(false);
  currentBtnData = this.btnSource.asObservable();

  constructor() { }

  changeEdtBtnData(data: boolean) {
    this.edtBtnSource.next(data)
  }

  changeBtnData(data: boolean) {
    this.btnSource.next(data)
  }
}
