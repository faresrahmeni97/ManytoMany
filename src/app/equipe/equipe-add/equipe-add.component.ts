import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EquipeServiceService} from "../../_services/equipe-service.service";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-equipe-add',
  templateUrl: './equipe-add.component.html',
  styleUrls: ['./equipe-add.component.css']

})
export class EquipeAddComponent implements OnInit {
  isLoggedIn: any;
  showAdminBoard = false;
  roles:any;
  imageSrc: any;
  selectedFile: Blob;
  base64textString: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service:EquipeServiceService,
              private tokenStorageService: TokenStorageService) { }
  checkoutForm = this.formBuilder.group({
    id: '',
    paysequipe: '',
    formation: '',
    imageequipe: '',
    nbcoupe: '',

    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
    if (!this.showAdminBoard)
    {
      this.router.navigate(['/equipes']);
    }

  }
  get f(){
    return this.checkoutForm.controls;
  }


  public onFileChanged(event:Event) {
    let file = (<HTMLInputElement>event.target).files;
    console.log(file)
    this.selectedFile = file?.item(0) as File
   // console.log(this.selectedFile.picByte)



    var reader =  new FileReader();
    reader.onload  = this.handleFile.bind(this)
    reader.readAsBinaryString(this.selectedFile)
    }

  handleFile(event :any){
    var binaryStrings =   event.target.result;
    this.base64textString  = btoa(binaryStrings);
    this.checkoutForm.value.imageequipe= this.base64textString
    console.log(this.checkoutForm.value.imageequipe)
 //   console.log(this.joueur.photos)
  }
  onSubmit() {
   
    this.service.addEquipe(this.checkoutForm.value).subscribe( data => { this.router.navigate(['/equipes']);
    });
  }
}
