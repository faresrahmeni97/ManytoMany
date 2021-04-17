import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../modele/staff';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  private baseUrl = 'http://localhost:8090/api/staff';
  constructor(private http: HttpClient/*,private token: TokenStorageService*/) { }

     getStaffsList(): Observable<any> {
      
      /*var headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');
      headers_object.append('Bearer',this.token.getToken());
     
      const httpOptions = {
        headers: headers_object
      };*/
     return this.http.get(`${this.baseUrl}`);
     }
     deleteStaff(id: number): Observable<any> {
     return this.http.delete(`http://localhost:8090/api/staffdelete/${id}`, { responseType: 'text' });
     }
     addStaff(staff: Object): Observable<Object> {
     return this.http.post(`http://localhost:8090/api/staffadd`, staff);
     }
     updateStaff(id: number,ide: number,staff: Staff): Observable<Object> {
     return this.http.put(`http://localhost:8090/api/staffupdate/${id}/${ide}`, staff);
     }
      getStaffById(id: number): Observable<Staff>{
         return this.http.get<Staff>(`http://localhost:8090/api/staff/${id}`);
       }

}
