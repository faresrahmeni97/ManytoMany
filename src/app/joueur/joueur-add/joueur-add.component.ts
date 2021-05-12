import { Component, OnInit } from '@angular/core';
import {Joueur} from '../../modele/joueur';
import {Equipe} from '../../modele/equipe';
import {EquipeServiceService} from '../../_services/equipe-service.service';
import {JoueurServiceService} from '../../_services/joueur-service.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-joueur-add',
  templateUrl: './joueur-add.component.html',
  styleUrls: ['./joueur-add.component.css']
})
export class JoueurAddComponent implements OnInit {
  selectedFile!:any;
  isLoggedIn: any;
  roles: any;
  showAdminBoard = false;
  selectedPhoto =false;
  joueur: Joueur = new Joueur();
  ideq!: number;
  submitted = false;
  base64textString:any
  equipes: any;

  constructor(private equipeService: EquipeServiceService,
              private router: Router,
              private service: JoueurServiceService,
              private tokenStorageService: TokenStorageService) { }



  equipe !: Equipe;
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (!this.showAdminBoard)
    {
      this.router.navigate(['/joueurs']);
    }
    this.equipeService.getEquipesList().subscribe(data => {
      this.equipes = data;
    });
  }

  newStaff(): void {

    this.submitted = false;
    this.joueur = new Joueur();

  }

  save() {

      // @ts-ignore
      console.log(this.joueur.photos)
    this.service.addJoueur(this.joueur).subscribe(data => {
        console.log(data);
        this.joueur = new Joueur();
        this.router.navigate(['/joueurs']);
      });
    }

    public onFileChanged(event:Event) {
      let file = (<HTMLInputElement>event.target).files;
      console.log(file)
      this.selectedFile = file?.item(0) as File
     // console.log(this.selectedFile.picByte)



      var reader =  new FileReader();
      reader.onload  = this.handleFile.bind(this)
      reader.readAsBinaryString(this.selectedFile)
    
      console.log (this.joueur.photos)
      this.selectedPhoto = true
    }

    handleFile(event :any){
      var binaryStrings =   event.target.result;
      this.base64textString  = btoa(binaryStrings);
      this.joueur.photos= this.base64textString
   //   console.log(this.joueur.photos)
    }



onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/joueurs']);
  }
}
