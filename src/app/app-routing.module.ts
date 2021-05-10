import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {JoueurListComponent} from './joueur/joueur-list/joueur-list.component'
import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import {StaffAddComponent} from "./staff/staff-add/staff-add.component";
import {StaffDetailsComponent} from "./staff/staff-details/staff-details.component";
import {StaffUpdateComponent} from "./staff/staff-update/staff-update.component";
import {JoueurAddComponent} from "./joueur/joueur-add/joueur-add.component";
import {JoueurDetailsComponent} from "./joueur/joueur-details/joueur-details.component";
import {JoueurUpdateComponent} from "./joueur/joueur-update/joueur-update.component";
import {EquipeAddComponent} from "./equipe/equipe-add/equipe-add.component";
import {EquipeUpdateComponent} from "./equipe/equipe-update/equipe-update.component";
import {EquipeDetailsComponent} from "./equipe/equipe-details/equipe-details.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserUpdateComponent} from "./user/user-update/user-update.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'joueurs', component: JoueurListComponent },
  { path: 'joueuradd', component: JoueurAddComponent },
  { path: 'joueur/:id', component: JoueurDetailsComponent },
  { path: 'joueurupdate/:id/:ide', component: JoueurUpdateComponent },
  { path: 'equipes', component: EquipeListComponent },
  { path: 'equipe/:id', component: EquipeDetailsComponent },
  { path: 'addequipe', component: EquipeAddComponent },
  { path: 'equipeupdate/:id', component: EquipeUpdateComponent },
  { path: 'staffs', component: StaffListComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'staffadd', component: StaffAddComponent},
  { path: 'staff/:id', component: StaffDetailsComponent },
  { path: 'staffupdate/:id/:ide', component: StaffUpdateComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserAddComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'userupdate/:id', component: UserUpdateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


