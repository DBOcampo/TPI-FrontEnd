import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/EduList'

  constructor(private http: HttpClient) { }

  getList(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiURL}/traer`)
  }

  deleteList(list: List): Observable<List> {
    console.log(list, 'from service')
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<List>(url, httpOptions)
  }

  addList(list: List): Observable<List> {
    console.log(list, 'from service')
    return this.http.post<List>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editList(list: List): Observable<List> {
    console.log(list)
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.put<List>(url, list, httpOptions)
  }
}
