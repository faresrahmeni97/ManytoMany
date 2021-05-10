import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../modele/user';

const API_URL = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
     private baseUrl = 'http://localhost:8090';

       constructor(private http: HttpClient) { }

       getUser(id: number): Observable<any> {
         return this.http.get(`//localhost:8090/api/auth/user/${id}`);
       }


      createUser(user: Object): Observable<Object> {
            return this.http.post(`//localhost:8090/api/auth/adduser`, user);
          }


       deleteUser(id: number): Observable<any> {
         return this.http.delete(`//localhost:8090/api/auth/deleteuser/${id}`, { responseType: 'text' });
       }


       updateUser(id: number, value: any): Observable<Object> {
         return this.http.put(`//localhost:8090/api/auth/updateuser/${id}`, value);
       }



       getUsersList(){
         return this.http.get(`//localhost:8090/api/auth/users`);
       }

       }
