import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { proyect } from '../mocks/proyects';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private apiURL = 'http://localhost:5000/proyects'

  constructor(private http: HttpClient) {

  }

  getPy(): Observable<proyect[]> {
    return this.http.get<proyect[]>(this.apiURL)
  }

  delPy(py: proyect): Observable<proyect> {
    console.log(py.id)
    return this.http.delete<proyect>(`${this.apiURL}/${py.id}`)
  }

  addPy(py: proyect): Observable<proyect> {
    return this.http.post<proyect>(this.apiURL, py, httpOptions)
  }

  editPy(py: proyect): Observable<proyect> {
    console.log(py.id)
    return this.http.put<proyect>(`${this.apiURL}/${py.id}`, py, httpOptions)
  }
}
