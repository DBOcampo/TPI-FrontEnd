import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../mocks/images';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/mainImages'

  constructor(private http: HttpClient) { }

  getImg(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiURL}/traer`)
  }

  saveImg(list: Image): Observable<Image> {
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.put<Image>(url, list)
  }
}