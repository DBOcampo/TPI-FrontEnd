import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { infoCard } from '../mocks/infoCard';

@Injectable({
  providedIn: 'root'
})
export class InfoCardService {

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/infoCard'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<infoCard[]> {
    return this.http.get<infoCard[]>(`${this.apiURL}/traer`)
  }

  saveInfo(info: infoCard): Observable<infoCard> {
    const url = `${this.apiURL}/editar/${info.id}`
    return this.http.put<infoCard>(url, info)
  }
}
