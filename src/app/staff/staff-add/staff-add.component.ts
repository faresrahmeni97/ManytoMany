import {TokenStorageService} from '../../_services/token-storage.service';

import { Component, OnInit, Input } from '@angular/core';
import {Staff} from '../../modele/staff';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {StaffServiceService} from '../../_services/staff-service.service';
import {EquipeServiceService} from '../../_services/equipe-service.service';
import { Equipe } from '../../modele/equipe';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent {
isValidFormSubmitted = false;
  userForm = new FormGroup({
     nom: new FormControl('', [Validators.minLength(2)]),
     prenom: new FormControl('', [Validators.minLength(2)]),
     role: new FormControl('', [ Validators.required]),
   equipe: new FormControl(''),
     club: new FormControl('', [ Validators.required])
  });

   staff: Staff = new Staff();
      submitted = false;
  isLoggedIn: any;
  showAdminBoard = false;
  roles: any;
  staffs: any;
  equipes: any;
  constructor(private formBuilder: FormBuilder, private equipeService: EquipeServiceService,
              private router: Router,
              private service: StaffServiceService,
              private tokenStorageService: TokenStorageService) { }


  equipe !: Equipe;
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.equipeService.getEquipesList().subscribe(data => {
      this.equipes = data;
    });
    }

    if (this.showAdminBoard)
    {// ok
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

    this.service.addStaff(this.staff).subscribe(data => {
      this.staff = new Staff();
      this.router.navigate(['/staffs']);
    });

  }
  onFormSubmit() {
       this.isValidFormSubmitted = false;
       if (this.staff.nom.trim().length < 2) {
          return;
          }
       if (this.staff.prenom.trim().length < 2) {
                  return;
                  }
       this.save();
       this.isValidFormSubmitted = true;
       // this.staff = this.nom.value;


       this.userForm.reset();
    }
    get nom() {
       return this.userForm.get('nom');
    }
      get prenom() {
         return this.userForm.get('prenom');
      }

          get role() {
                     return this.userForm.get('role');
                  }
                   setNewStaff(staff: Staff): void {
                      console.log(staff);
                      this.staff = staff;
                    }
    get club() {
       return this.userForm.get('club');
    }

  }

