import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  private dataSource = new BehaviorSubject(false);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: boolean) {
    this.dataSource.next(data)
  }
}
