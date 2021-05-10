
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../modele/equipe';
@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService {
  private baseUrl = 'http://localhost:8090/api/equipes ';

  constructor(private http: HttpClient) { }
  getEquipesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
getEquipeById(id: number): Observable<Equipe>{
        return this.http.get<Equipe>(`http://localhost:8090/api/equipe/${id}`);
        }

addEquipe(equipe: Object): Observable<Object> {
  return this.http.post(`http://localhost:8090/api/equipeadd`, equipe);
  }
deleteEquipe(id: number): Observable<any> {
  return this.http.delete(`http://localhost:8090/api/equipedelete/${id}`, { responseType: 'text' });
  }
  updateEquipe(id: number,equipe: Equipe): Observable<Equipe> {
       return this.http.put(`http://localhost:8090/api/equipeupdate/${id}`, equipe);
       }
}
