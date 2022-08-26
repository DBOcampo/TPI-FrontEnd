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

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/skillDi'

  constructor(private http: HttpClient) { }

  getSkill(): Observable<skillidi[]> {
    return this.http.get<skillidi[]>(`${this.apiURL}/traer`)
  }

  deleteSkill(list: skillidi): Observable<skillidi> {
    console.log(list, 'from service')
    const url = `${this.apiURL}/borrar/${list.id}`
    return this.http.delete<skillidi>(url, httpOptions)
  }

  addSkill(list: skillidi): Observable<skillidi> {
    console.log(list, 'from service')
    return this.http.post<skillidi>(`${this.apiURL}/crear`, list, httpOptions)
  }

  editSkill(list: skillidi): Observable<skillidi> {
    console.log(list)
    const url = `${this.apiURL}/editar/${list.id}`
    return this.http.put<skillidi>(url, list, httpOptions)
  }
}
