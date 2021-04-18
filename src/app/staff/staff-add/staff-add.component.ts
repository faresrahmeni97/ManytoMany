import { Component, OnInit } from '@angular/core';
import {Staff} from "../../modele/staff";
import {StaffServiceService} from "../../_services/staff-service.service";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {Router} from "@angular/router";
import {Equipe} from "../../modele/equipe";

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent {

  staff: Staff = new Staff();
  ideq!:number;

  constructor(private equipeService: EquipeServiceService,private router: Router , private service:StaffServiceService) { }


  equipe !:Equipe;
  ngOnInit() {

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
