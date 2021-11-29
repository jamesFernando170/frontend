import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { credencialesRecuperarClave } from 'src/app/models/credenciales-recuperar-clave.model';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SecurityService } from 'src/app/services/compartido/security.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private securityServices: SecurityService,
    private localStorageServices: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(generalData.EMAIL_MIN_LENGHT)]]
    });
  }

  login() {
    if (this.form.invalid) {
      openGeneralMessageModal(generalData.INVALID_FORM_MESSAGE)
    } else {
      let modelo = new credencialesRecuperarClave(); // Modelo donde podremos utilizar para cojer la informacion que viene desde el login
      modelo.username = this.GetForm['username'].value;
      console.log(modelo.username);
      
      this.securityServices.RecuperarClave(modelo).subscribe({
        /* next: (data: SessionData) => {
           console.log(data);
          this.localStorageServices.SaveSessionData(data);
          data.isLoggedIn = true;
          this.securityServices.RefreshSessionData(data);
          this.router.navigate(["/home"])
          console.log("ERROR");
          
        },
        error: (error: any) => {
          openGeneralMessageModal(generalData.GENERAL_ERROR_MESSAGE)
        } */
      });
    }
  }

  get GetForm() {
    return this.form.controls;
  }

}
