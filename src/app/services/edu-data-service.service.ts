import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../edulist';
import { LIST } from '../mock-edulist';

@Injectable({
  providedIn: 'root'
})
export class EduDataServiceService {

  private dataSource = new BehaviorSubject(false);
  currentData = this.dataSource.asObservable();
  private dataSource2 = new BehaviorSubject(false);
  currentData2 = this.dataSource2.asObservable();
  private dataSource3 = new BehaviorSubject(LIST[0]);
  currentData3 = this.dataSource3.asObservable();


  constructor() { }

  changeData(data: boolean) {
    this.dataSource.next(data)
  }
  changeData2(data2: boolean) {
    this.dataSource2.next(data2)
  }
  changeData3(data3: List) {
    this.dataSource3.next(data3)
  }
}
