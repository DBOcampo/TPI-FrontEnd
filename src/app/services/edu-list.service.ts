import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../mocks/edulist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { json } from 'express';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class EduListService {

  private apiURL = 'https://portfolio-back-node-7b3m9knxu-dylans-projects-30f80c71.vercel.app/api/EduList'

  constructor(private http: HttpClient) { }

  getList(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiURL}/traer`)
  }

  deleteList(list: List): Observable<List> {
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<List>(url, httpOptions)
  }

  addList(list: List): Observable<List> {
    return this.http.post<List>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editList(list: List): Observable<List> {
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.patch<List>(url, list, httpOptions)
  }
}
