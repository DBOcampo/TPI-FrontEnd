import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skillhs } from '../mocks/skill-hs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillHsService {

  private apiURL = 'https://portfolio-back-node-7b3m9knxu-dylans-projects-30f80c71.vercel.app/api/skillHs'

  constructor(private http: HttpClient) { }

  getSkill(): Observable<skillhs[]> {
    return this.http.get<skillhs[]>(`${this.apiURL}/traer`)
  }

  deleteSkill(list: skillhs): Observable<skillhs> {
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<skillhs>(url, httpOptions)
  }

  addSkill(list: skillhs): Observable<skillhs> {
    return this.http.post<skillhs>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editSkill(list: skillhs): Observable<skillhs> {
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.patch<skillhs>(url, list, httpOptions)
  }
}
