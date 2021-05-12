import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.service';

import { JoueurListComponent } from './joueur/joueur-list/joueur-list.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { StaffAddComponent } from './staff/staff-add/staff-add.component';
import { JoueurAddComponent } from './joueur/joueur-add/joueur-add.component';
import { EquipeAddComponent } from './equipe/equipe-add/equipe-add.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { StaffUpdateComponent } from './staff/staff-update/staff-update.component';
import { JoueurUpdateComponent } from './joueur/joueur-update/joueur-update.component';
import { JoueurDetailsComponent } from './joueur/joueur-details/joueur-details.component';
import { EquipeUpdateComponent } from './equipe/equipe-update/equipe-update.component';
import { EquipeDetailsComponent } from './equipe/equipe-details/equipe-details.component';
import {EquipeListComponent} from './equipe/equipe-list/equipe-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { CommonModule } from '@angular/common';  



@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    JoueurListComponent,
    StaffListComponent,
    StaffAddComponent,
    JoueurAddComponent,
    StaffDetailsComponent,
    StaffUpdateComponent,
    JoueurUpdateComponent,
    JoueurDetailsComponent,
    EquipeUpdateComponent,
    EquipeDetailsComponent,
    EquipeListComponent,
    UserListComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    UserAddComponent,
    EquipeAddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
