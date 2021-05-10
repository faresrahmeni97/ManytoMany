import { Component, OnInit } from '@angular/core';
import {JoueurServiceService} from "../../_services/joueur-service.service";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-joueur-details',
  templateUrl: './joueur-details.component.html',
  styleUrls: ['./joueur-details.component.css']
})
export class JoueurDetailsComponent implements OnInit {
  isLoggedIn: any;
  roles:any;
  showAdminBoard = false;
  id: any;
  private sub: any;
  joueur:any;
  constructor(private service:JoueurServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {}

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      //this.reloadData();
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];

        this.service.getJoueurById(this.id).subscribe( data => {
          this.joueur = data;
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
