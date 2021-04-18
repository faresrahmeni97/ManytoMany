import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../modele/user';

const API_URL = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/userdelete/${id}`, { responseType: 'text' });
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/adduser`, user);
  }
  updateUser(id: number,user: User): Observable<User> {
    return this.http.put(`http://localhost:8080/userupdate/${id}`, user);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/user/${id}`);
  }

}

