import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from '../../_services/equipe-service.service';
import {StaffServiceService} from '../../_services/staff-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipe} from '../../modele/equipe';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Staff} from '../../modele/staff';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrls: ['./staff-update.component.css']
})
export class StaffUpdateComponent implements OnInit {

  showAdminBoard = false;
  isLoggedIn: any;
  submitted = false;
  roles: any;
  staff: any;
  equipe!: Equipe;
  ide!: number;
  id!: number;
  equipes: any;
  staffs: string[] = ['Entraîneur', 'Médecin', 'Infirmier', 'Respensable Marketing', 'Administration'];
    currentStaff: Staff;

  constructor(private equipeService: EquipeServiceService,
              private service: StaffServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }

    if (!this.showAdminBoard)
    {
      this.router.navigate(['/staffs']);
    }


    this.id = this.route.snapshot.params.id;
    this.ide = this.route.snapshot.params.ide;
    this.service.getStaffById(this.id).subscribe(data => {
      this.staff = data;

    }, error => console.log(error));
    this.equipeService.getEquipeById(this.ide).subscribe(data => {
      this.staff.equipe = data;
    });
    this.equipeService.getEquipesList().subscribe(data => {
      this.equipes = data;
    });
  }
 setNewStaff(staff: Staff): void {
    console.log(staff);
    this.currentStaff = staff;
  }

  save(){

    this.service.updateStaff(this.id, this.ide, this.staff).subscribe(
      data => {
        console.log(data);
        this.getStaffsList();

      });
  }


  onSubmit(){
    this.equipeService.getEquipeById(this.staff.equipe.id).subscribe(data => {
      this.staff.equipe = data;

      // tslint:disable-next-line:no-shadowed-variable
      this.service.updateStaff(this.id, this.staff.equipe.id, this.staff).subscribe(data => {
        console.log(data);
        this.getStaffsList();
      });
    });
    this.submitted = true;
  }

  getStaffsList(){
    this.router.navigate(['/staffs']);
  }

}
