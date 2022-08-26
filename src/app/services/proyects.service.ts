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

  private apiURL = 'https://calm-reaches-07333.herokuapp.com/Proyects'

  constructor(private http: HttpClient) { }

  getPy(): Observable<proyect[]> {
    return this.http.get<proyect[]>(`${this.apiURL}/traer`)
  }

  delPy(py: proyect): Observable<proyect> {
    console.log(py, 'from service')
    const url = `${this.apiURL}/borrar/${py.id}`
    return this.http.delete<proyect>(url, httpOptions)
  }

  addPy(py: proyect): Observable<proyect> {
    console.log(py, 'from service')
    return this.http.post<proyect>(`${this.apiURL}/crear`, py, httpOptions)
  }

  editPy(py: proyect): Observable<proyect> {
    console.log(py)
    const url = `${this.apiURL}/editar/${py.id}`
    return this.http.put<proyect>(url, py, httpOptions)
  }
}
