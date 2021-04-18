import { Component, OnInit } from '@angular/core';
import {Staff} from "../../modele/staff";
import {StaffServiceService} from "../../_services/staff-service.service";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {Router} from "@angular/router";
import {Equipe} from "../../modele/equipe";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent {

  showAdminBoard = false;

  staff: Staff = new Staff();
  ideq!:number;

  constructor(private equipeService: EquipeServiceService,
              private router: Router,
              private service:StaffServiceService,
              private tokenStorageService: TokenStorageService) { }


  equipe !:Equipe;
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (this.showAdminBoard)
    {//ok
    }
    else
    {
      this.router.navigate(['/staffs']);
    }

  }

  newStaff(): void {

    this.staff = new Staff();

  }

  save() {
    this.equipeService.getEquipeById(this.ideq).subscribe(data =>{
      this.staff.equipe=data;
      console.log(this.staff.equipe);
      this.service.addStaff(this.staff).subscribe(data => {
        console.log(data);
        this.staff = new Staff();
        this.router.navigate(['/staffs']);
      });
    });
  }
  onSubmit() {


    this.save();
  }

}
