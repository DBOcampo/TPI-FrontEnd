import { Injectable } from '@angular/core';
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

  private apiUrl = 'http://localhost:5000/skillidi'

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get<skillidi[]>(this.apiUrl)
  }

  delSkill(skill: skillidi) {
    return this.http.delete<skillidi>(`${this.apiUrl}/${skill.id}`)
  }

  addSkill(skill: skillidi) {
    return this.http.post<skillidi>(this.apiUrl, skill)
  }

  editSkill(skill: skillidi) {
    return this.http.put<skillidi>(`${this.apiUrl}/${skill.id}`, skill, httpOptions)
  }
}
