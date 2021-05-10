import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.css']
})
export class EquipeDetailsComponent implements OnInit {
  isLoggedIn: any;
  showAdminBoard = false;
  id: any;
  roles:any;
  private sub: any;
  equipe:any;
  constructor(private service:EquipeServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {}



  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.reloadData();
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];

        this.service.getEquipeById(this.id).subscribe( data => {
          this.equipe = data;
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
