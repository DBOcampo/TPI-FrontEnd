import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EduDataServiceService {

  private dataSource = new BehaviorSubject(false);
  currentData = this.dataSource.asObservable();
  private dataSource2 = new BehaviorSubject(false);
  currentData2 = this.dataSource2.asObservable();

  constructor() { }

  changeData(data: boolean) {
    this.dataSource.next(data)
  }
  changeData2(data2: boolean) {
    this.dataSource2.next(data2)
  }
}
