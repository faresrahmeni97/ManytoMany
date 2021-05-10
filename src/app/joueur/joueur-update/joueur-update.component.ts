import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {JoueurServiceService} from "../../_services/joueur-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Equipe} from "../../modele/equipe";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-joueur-update',
  templateUrl: './joueur-update.component.html',
  styleUrls: ['./joueur-update.component.css']
})
export class JoueurUpdateComponent implements OnInit {
  isLoggedIn: any;
  roles:any;
  showAdminBoard = false;
  joueur: any;
  equipe!: Equipe;
  id!: number;
  ideq!:number;
  submitted = false;
  constructor(private equipeService: EquipeServiceService,
              private service:JoueurServiceService,
              private route: ActivatedRoute,
              private http: HttpClient,
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
      this.router.navigate(['/home']);
    }

    this.id = this.route.snapshot.params['id'];
    this.ideq = this.route.snapshot.params['ide'];
    console.log(this.ideq);
    this.service.getJoueurById(this.id).subscribe(data => {
      this.joueur = data;

    }, error => console.log(error));
    this.equipeService.getEquipeById(this.ideq).subscribe(data =>{
      this.joueur.equipe=data;
    });
  }



  save(){

    this.service.updateJoueur(this.id,this.ideq,this.joueur).subscribe(
      data => {
        console.log(data);
        this.getJoueursList();

      })
  }


  onSubmit(){



    this.equipeService.getEquipeById(this.ideq).subscribe(data =>{
      this.joueur.equipe=data;

      this.service.updateJoueur(this.id,this.ideq,this.joueur).subscribe(data => {
        console.log(data);
        this.getJoueursList();
      })
    })
    this.submitted = true;
  }



  getJoueursList(){
    this.router.navigate(['/joueurs']);
  }
}
