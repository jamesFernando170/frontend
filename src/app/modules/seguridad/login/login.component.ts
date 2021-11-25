import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generalData } from 'src/app/config/general-data';
import { userCredentialsModel } from 'src/app/models/credenciales-usuario.model';
import { MD5 } from 'crypto-js';
import { SecurityService } from 'src/app/services/compartido/security.service';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { Router } from '@angular/router';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      username: ["", [Validators.required, Validators.email, Validators.minLength(generalData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(generalData.PASSWORD_MIN_LENGHT)]]
    });
  }

  login() {
    if (this.form.invalid) {
      openGeneralMessageModal(generalData.INVALID_FORM_MESSAGE)
    } else {
      let modelo = new userCredentialsModel(); // Modelo donde podremos utilizar para cojer la informacion que viene desde el login
      modelo.username = this.GetForm['username'].value;
      modelo.password = MD5(this.GetForm['password'].value).toString();
      this.securityServices.Login(modelo).subscribe({
        next: (data: SessionData) => {
          console.log(data);
          this.localStorageServices.SaveSessionData(data);
          data.isLoggedIn = true;
          this.securityServices.RefreshSessionData(data);
          this.router.navigate(["/home"])
        },
        error: (error: any) => {
          openGeneralMessageModal(generalData.GENERAL_ERROR_MESSAGE)
        }
      }); // Datos que se le enviaran desde el frontend hacia el backend, el usuario y la contraseña
    }
  }

  get GetForm() {
    return this.form.controls;
  }

}
