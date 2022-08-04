import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exList } from '../mocks/exlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ExListService {

  private apiURL = 'http://localhost:5000/exList'

  constructor(private http: HttpClient) { }

  getList(): Observable<exList[]> {
    return this.http.get<exList[]>(this.apiURL)
  }

  deleteList(exlist: exList): Observable<exList> {
    console.log(exlist)
    const url = `${this.apiURL}/${exlist.id}`
    return this.http.delete<exList>(url)
  }

  addList(exlist: exList): Observable<exList> {
    return this.http.post<exList>(this.apiURL, exlist, httpOptions)
  }

  editList(list: exList) {
    const url = `${this.apiURL}/${list.id}`
    return this.http.put<exList>(url, list, httpOptions)
  }
}
