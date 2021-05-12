import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from '../../_services/equipe-service.service';
import {JoueurServiceService} from '../../_services/joueur-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Equipe} from '../../modele/equipe';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-joueur-update',
  templateUrl: './joueur-update.component.html',
  styleUrls: ['./joueur-update.component.css']
})
export class JoueurUpdateComponent implements OnInit {
  selectedFile!:any;
  base64textString:any;
  isLoggedIn: any;
  roles: any;
  showAdminBoard = false;
  joueur: any;
  equipe!: Equipe;
  id!: number;
  ideq!: number;
  submitted = false;
  equipes: any;
  titulaire: any;

  constructor(private equipeService: EquipeServiceService,
              private service: JoueurServiceService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }




  ngOnInit(): void {
    this.equipeService.getEquipesList().subscribe(data => {
      this.equipes = data;
    });

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

    this.id = this.route.snapshot.params.id;
    this.ideq = this.route.snapshot.params.ide;
    console.log(this.ideq);
    // @ts-ignore
    this.service.getJoueurById(this.id).subscribe(data => {
      this.joueur = data;
      this.titulaire = this.joueur.titulaire;

    }, error => console.log(error));
    this.equipeService.getEquipeById(this.joueur.equipe.id).subscribe(data => {
      this.joueur.equipe = data;
    });
  }



  save(){

    this.service.updateJoueur(this.id, this.joueur.equipe.id, this.joueur, '').subscribe(
      data => {
        console.log(data);
        this.getJoueursList();

      });
  }

  public onFileChanged(event:Event) {
    let file = (<HTMLInputElement>event.target).files;
    console.log(file)
    this.selectedFile = file?.item(0) as File



    var reader =  new FileReader();
    reader.onload  = this.handleFile.bind(this)
    reader.readAsBinaryString(this.selectedFile)
  
    console.log (this.joueur.photos)

  }

  handleFile(event :any){
    var binaryStrings =   event.target.result;
    this.base64textString  = btoa(binaryStrings);
    this.joueur.photos= this.base64textString
 //   console.log(this.joueur.photos)
  }
  onSubmit(){



    this.equipeService.getEquipeById(this.joueur.equipe.id).subscribe(data => {
      this.joueur.equipe = data;

      this.service.updateJoueur(this.id, this.joueur.equipe.id, this.joueur, '').subscribe(data => {
        console.log(data);
        this.getJoueursList();
      });
    });
    this.submitted = true;
  }



  getJoueursList(){
    this.router.navigate(['/joueurs']);
  }
}
