import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeServiceService } from 'src/app/_services/equipe-service.service';
import { StaffServiceService } from 'src/app/_services/staff-service.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {

message:any;
staffs: any;
constructor(private equipeService: EquipeServiceService,private service:StaffServiceService,private http: HttpClient,private router: Router,private token: TokenStorageService) {}

    ngOnInit(): void {
    this.reloadData();
    }

    reloadData() {
    this.staffs =this.service.getStaffsList();

        let resp=this.service.getStaffsList();
             resp.subscribe ((data)=>this.staffs=data);
    }

    deleteStaff(id: number) {
       this.service.deleteStaff(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
      error => console.log(error));
      }

    getStaffById(id: number){
    this.router.navigate(['staff', id]);
                    }
    addStaff(id: number){
    this.router.navigate(['staffadd']);
      }
    updateStaff(id: number,ide: number){
    this.router.navigate(['staffupdate',id,ide]);
    }
}
