import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isLoggedIn: any;
  showAdminBoard = false;
  message:any;
  users: any;
  roles:any;

  constructor(private service:UserService,
              private router: Router,
              private http: HttpClient,
              private tokenStorageService: TokenStorageService) {

  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (this.showAdminBoard)
    {
      this.reloadData();
    }
    else
    {
      this.router.navigate(['/home']);
    }


  }

  reloadData() {
    this.users =this.service.getUsersList();
    let resp=this.service.getUsersList();
    resp.subscribe ((data)=>{
      this.users=data

    });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateUser(id: number){
    this.router.navigate(['userupdate', id]);
  }

  addUser(id: number){
    this.router.navigate(['adduser']);
  }

  getUserById(id: number){
    this.router.navigate(['user', id]);
  }

}
