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

  private apiURL = 'https://portfoliopi-nodejs-api-production.up.railway.app/api/ExpList'

  constructor(private http: HttpClient) { }

  getList(): Observable<exList[]> {
    return this.http.get<exList[]>(`${this.apiURL}/traer`)
  }

  deleteList(list: exList): Observable<exList> {
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<exList>(url, httpOptions)
  }

  addList(list: exList): Observable<exList> {
    return this.http.post<exList>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editList(list: exList): Observable<exList> {
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.patch<exList>(url, list, httpOptions)
  }
}
