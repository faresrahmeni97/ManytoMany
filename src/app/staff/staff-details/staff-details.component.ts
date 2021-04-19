import { Component, OnInit } from '@angular/core';
import {StaffServiceService} from "../../_services/staff-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  showAdminBoard = false;

  id: any;
  private sub: any;
  staff:any;
  constructor(private service:StaffServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];

        this.service.getStaffById(this.id).subscribe( data => {
          this.staff = data;
          console.log(data);
        });
      });
    }
    else
    {
      this.router.navigate(['/home']);
    }


  }
}
