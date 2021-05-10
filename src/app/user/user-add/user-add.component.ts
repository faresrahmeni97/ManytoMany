import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  showAdminBoard = false;
  isLoggedIn: any;
  roles:any;
  constructor(private formBuilder: FormBuilder,private router: Router,
              private service:UserService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
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

  }


  checkoutForm = this.formBuilder.group({
    id: '',
    username: '',
    password: '',
    email: ''
  });
  onSubmit() {
    this.service.addUser(this.checkoutForm.value).subscribe( data => { this.router.navigate(['/users']);
    });
  }

}
