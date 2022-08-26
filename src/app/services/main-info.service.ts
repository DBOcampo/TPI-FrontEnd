import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mInfo } from '../mocks/mainInfo';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService {

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/mainInfo'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<mInfo[]> {
    return this.http.get<mInfo[]>(`${this.apiURL}/traer`)
  }

  saveInfo(info: mInfo): Observable<mInfo> {
    const url = `${this.apiURL}/editar/${info.id}`
    return this.http.put<mInfo>(url, info)
  }
}
