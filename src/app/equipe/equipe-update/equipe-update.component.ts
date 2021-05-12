import { Component, OnInit } from '@angular/core';
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-equipe-update',
  templateUrl: './equipe-update.component.html',
  styleUrls: ['./equipe-update.component.css']
})
export class EquipeUpdateComponent implements OnInit {
  roles:any;
  isLoggedIn: any;
  showAdminBoard = false;
  id:any;
  equipe: any;
  selectedFile: File;
  base64textString: string;

  constructor(private service:EquipeServiceService,
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

      this.service.getEquipeById(this.id).subscribe(data => {
        this.equipe = data;
        console.log(data);
      }, error => console.log(error));
    }
    else
    {
      this.router.navigate(['/equipes']);
    }

  }
  public onFileChanged(event:Event) {
    let file = (<HTMLInputElement>event.target).files;
    console.log(file)
    this.selectedFile = file?.item(0) as File



    var reader =  new FileReader();
    reader.onload  = this.handleFile.bind(this)
    reader.readAsBinaryString(this.selectedFile)
  
    console.log (this.equipe.imageequipe)

  }

  handleFile(event :any){
    var binaryStrings =   event.target.result;
    this.base64textString  = btoa(binaryStrings);
    this.equipe.imageequipe= this.base64textString
 //   console.log(this.joueur.photos)
  }
  onSubmit(){
    this.service.updateEquipe(this.id, this.equipe).subscribe( data =>{
        this.getEquipesList();
      }
      , error => console.log(error));
  }

  getEquipesList(){
    this.router.navigate(['/equipes']);
  }
}
