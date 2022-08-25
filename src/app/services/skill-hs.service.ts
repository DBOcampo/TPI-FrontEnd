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

  private apiURL = 'http://localhost:8080/skillHs'

  constructor(private http: HttpClient) { }

  getSkill(): Observable<skillhs[]> {
    return this.http.get<skillhs[]>(`${this.apiURL}/traer`)
  }

  deleteSkill(list: skillhs): Observable<skillhs> {
    console.log(list, 'from service')
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<skillhs>(url, httpOptions)
  }

  addSkill(list: skillhs): Observable<skillhs> {
    console.log(list, 'from service')
    return this.http.post<skillhs>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editSkill(list: skillhs): Observable<skillhs> {
    console.log(list)
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.put<skillhs>(url, list, httpOptions)
  }
}
