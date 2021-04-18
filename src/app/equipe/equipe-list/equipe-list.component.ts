import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {
//users: User[] = [];
// users: Observable<User[]>;
//users:User=new User(0 ," "," "," "," ");
  message:any;
  equipes: any;
  constructor(private service:EquipeServiceService,
              private http: HttpClient,
              private router: Router) {

  }
  ngOnInit(): void {
    this.reloadData();
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
