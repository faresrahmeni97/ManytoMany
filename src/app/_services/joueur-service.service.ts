import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from '../modele/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurServiceService {
  private baseUrl = 'http://localhost:8090/api/joueurs ';

  constructor(private http: HttpClient) { }


      getJoueursList(): Observable<any> {
              return this.http.get(`${this.baseUrl}`);
      }
      deletejoueur(id: number,token :string): Observable<any> {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );

        const httpOptions = {
          headers: headers_object
        };
      return this.http.delete(`http://localhost:8090/api/joueurdelete/${id}`, {responseType: 'text'});
      }

      getJoueurById(id: number,token :string): Observable<Joueur>{
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );
        const httpOptions = {
          headers: headers_object
        };
      return this.http.get<Joueur>(`http://localhost:8090/api/joueur/${id}`);
      }

      addJoueur(joueur:Joueur): Observable<Object> {

           return this.http.post(`http://localhost:8090/api/joueur/save`, joueur);
           }

           
      updateJoueur(id: number,ideq:number,joueur: Joueur,token :string): Observable<Object> {
        var headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Bearer',token );
        const httpOptions = {
          headers: headers_object
        };
        return this.http.put(`http://localhost:8090/api/joueurupdate/${id}/${ideq}`, joueur,httpOptions);
           }
}
