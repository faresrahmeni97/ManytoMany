import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {
  showAdminBoard = false;
  isLoggedIn: any;
  message:any;
  equipes: any;
  roles:any;
  constructor(private service:EquipeServiceService,
              private http: HttpClient,
              private router: Router,private tokenStorageService: TokenStorageService) {

  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.reloadData();
    }
    else
    {
      this.router.navigate(['/home']);
    }


  }

  reloadData() {
    this.equipes =this.service.getEquipesList();

    let resp=this.service.getEquipesList();
    resp.subscribe ((data)=>this.equipes=data);
  }

  deleteEquipe(id: number) {
    this.service.deleteEquipe(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  getEquipeById(id: number){
    this.router.navigate(['equipe', id]);
  }

  addEquipe(id: number){
    this.router.navigate(['addequipe']);
  }
  updateEquipe(id: number){
    this.router.navigate(['equipeupdate',id]);
  }

}
