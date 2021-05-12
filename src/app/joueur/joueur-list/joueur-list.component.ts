import { Component, OnInit } from '@angular/core';
import {JoueurServiceService} from "../../_services/joueur-service.service";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-joueur-list',
  templateUrl: './joueur-list.component.html',
  styleUrls: ['./joueur-list.component.css']
})
export class JoueurListComponent{
  showAdminBoard = false;
  isLoggedIn: any;
  roles:any;
  message:any;
  joueurs: any;

  constructor(private service:JoueurServiceService,
              private equipeService: EquipeServiceService,
              private http: HttpClient,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
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
    this.joueurs =this.service.getJoueursList();
    let resp=this.service.getJoueursList();
    resp.subscribe ((data)=>{this.joueurs=data
      this.joueurs.array.forEach(element => {
        element.photos = 'data:image/jpeg;base64,'+element.photos
        console.log(element.photos)
        
      });
    });;
  }

  deleteJoueur(id: number) {
    this.service.deletejoueur(id,'')
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  addJoueur(id: number){
    this.router.navigate(['joueuradd']);
  }
  getJoueurById(id: number){
    this.router.navigate(['joueur', id]);
  }

  updateJoueur(id: number,ideq: number){
    this.router.navigate(['joueurupdate',id,ideq]);
  }


}
