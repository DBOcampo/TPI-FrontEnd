import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skillidi } from '../mocks/skill-idi';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillIdiService {

  private apiURL = 'https://portfolio-back-node-7b3m9knxu-dylans-projects-30f80c71.vercel.app/api/skillDi'

  constructor(private http: HttpClient) { }

  getSkill(): Observable<skillidi[]> {
    return this.http.get<skillidi[]>(`${this.apiURL}/traer`)
  }

  deleteSkill(list: skillidi): Observable<skillidi> {
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<skillidi>(url, httpOptions)
  }

  addSkill(list: skillidi): Observable<skillidi> {
    return this.http.post<skillidi>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editSkill(list: skillidi): Observable<skillidi> {
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.patch<skillidi>(url, list, httpOptions)
  }
}
