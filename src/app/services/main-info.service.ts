import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mInfo } from '../mocks/mainInfo';

@Injectable({
  providedIn: 'root'
})
export class MainInfoService {

  private apiURL = 'https://portfolio-back-node-7b3m9knxu-dylans-projects-30f80c71.vercel.app/api/mainInfo'

  constructor(private http: HttpClient) { }

  getInfo(): Observable<mInfo[]> {
    return this.http.get<mInfo[]>(`${this.apiURL}/traer`)
  }

  saveInfo(info: mInfo): Observable<mInfo> {
    const url = `${this.apiURL}/editar/${info.id}`
    return this.http.patch<mInfo>(url, info)
  }
}
