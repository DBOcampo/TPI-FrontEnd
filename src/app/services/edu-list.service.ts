import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from '../mocks/edulist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class EduListService {

  private apiURL = 'http://localhost:5000/eduList'

  constructor(private http: HttpClient) { }

  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.apiURL)
  }

  deleteList(list: List): Observable<List> {
    console.log(list, 'from service')
    const url = `${this.apiURL}/${list.id}`
    return this.http.delete<List>(url)
  }

  addList(list: List): Observable<List> {
    console.log(list, 'from service')
    return this.http.post<List>(this.apiURL, list, httpOptions)
  }

  editList(list: List): Observable<List> {
    const url = `${this.apiURL}/${list.id}`
    return this.http.put<List>(url, list, httpOptions)
  }
}
