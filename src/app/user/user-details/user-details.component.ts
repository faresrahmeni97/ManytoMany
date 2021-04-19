import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  showAdminBoard = false;
  id: any;
  private sub: any;
  user:any;
  constructor(private service:UserService, private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (this.showAdminBoard)
    {
      //this.reloadData();
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];

        this.service.getUserById(this.id).subscribe( data => {
          this.user = data;
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
