import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   currentUser: any;
 private roles: string[];
  isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username: string;
   constructor(private token: TokenStorageService, private router :Router) { }

   ngOnInit() {
     this.currentUser = this.token.getUser();
            this.roles = this.currentUser.roles;
            this.isLoggedIn =true;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
   }
}
