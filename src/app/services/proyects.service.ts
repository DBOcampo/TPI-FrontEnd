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

  private apiURL = 'https://portfoliopi-nodejs-api-production.up.railway.app/api/Proyects'

  constructor(private http: HttpClient) { }

  getPy(): Observable<proyect[]> {
    return this.http.get<proyect[]>(`${this.apiURL}/traer`)
  }

  delPy(py: proyect): Observable<proyect> {
    const url = `${this.apiURL}/borrar/${py.id}`
    return this.http.delete<proyect>(url, httpOptions)
  }

  addPy(py: proyect): Observable<proyect> {
    return this.http.post<proyect>(`${this.apiURL}/crear`, py, httpOptions)
  }

  editPy(py: proyect): Observable<proyect> {
    const url = `${this.apiURL}/editar/${py.id}`
    console.log(py)
    return this.http.patch<proyect>(url, py, httpOptions)
  }
}
