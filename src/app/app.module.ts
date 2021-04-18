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
    EquipeAddComponent,
    StaffDetailsComponent,
    StaffUpdateComponent,
    JoueurUpdateComponent,
    JoueurDetailsComponent,
    EquipeUpdateComponent,
    EquipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
