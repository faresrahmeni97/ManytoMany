import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  showAdminBoard = false;
  id:any;
  user: any;

  //user = new User();
  //user = new User();
  constructor(private service:UserService,
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

    if (this.showAdminBoard)
    {

      this.id = this.route.snapshot.params['id'];

      this.service.getUserById(this.id).subscribe(data => {
        this.user = data;
        console.log(data);
      }, error => console.log(error));
    }
    else
    {
      this.router.navigate(['/home']);
    }

  }

  onSubmit(){
    this.service.updateUser(this.id, this.user).subscribe( data =>{
        this.getUsersList();
      }
      , error => console.log(error));
  }

  getUsersList(){
    this.router.navigate(['/users']);
  }

}
