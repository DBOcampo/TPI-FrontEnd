import { Injectable } from '@angular/core';
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

  private apiURL = 'http://localhost:5000/skillhs'

  constructor(private http: HttpClient) { }

  getSkill() {
    return this.http.get<skillhs[]>(this.apiURL)
  }

  deleteSkill(skill: skillhs) {
    return this.http.delete<skillhs>(`${this.apiURL}/${skill.id}`)
  }

  addSkill(skill: skillhs) {
    return this.http.post<skillhs>(this.apiURL, skill, httpOptions)
  }

  editSkill(skill: skillhs) {
    return this.http.put<skillhs>(`${this.apiURL}/${skill.id}`, skill, httpOptions)
  }
}
