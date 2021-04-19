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
  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.checkoutForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  onSubmit() {
    this.service.addEquipe(this.checkoutForm.value).subscribe( data => { this.router.navigate(['/equipes']);
    });
  }
}
