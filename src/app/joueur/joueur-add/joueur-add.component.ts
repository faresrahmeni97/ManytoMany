import { Component, OnInit } from '@angular/core';
import {Joueur} from "../../modele/joueur";
import {Equipe} from "../../modele/equipe";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {JoueurServiceService} from "../../_services/joueur-service.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-joueur-add',
  templateUrl: './joueur-add.component.html',
  styleUrls: ['./joueur-add.component.css']
})
export class JoueurAddComponent implements OnInit {

  isLoggedIn: any;
  roles:any;
  showAdminBoard = false;

  joueur: Joueur = new Joueur();
  ideq!:number;
  submitted = false;
  constructor(private equipeService: EquipeServiceService,
              private router: Router,
              private service:JoueurServiceService,
              private tokenStorageService: TokenStorageService) { }



  equipe !:Equipe;
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (!this.showAdminBoard)
    {
      this.router.navigate(['/joueurs']);
    }
  }

  newStaff(): void {

    this.submitted = false;
    this.joueur = new Joueur();

  }

  save() {
    this.equipeService.getEquipeById(this.ideq).subscribe(data =>{
      this.joueur.equipe=data;
      console.log(this.joueur.equipe);
      this.service.addJoueur(this.joueur).subscribe(data => {
        console.log(data);
        this.joueur = new Joueur();
      });
    });
  }
  onSubmit() {

    this.submitted = true;
    this.save();
  }
}
