import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MD5 } from 'crypto-js';
import { generalData } from 'src/app/config/general-data';
import { credencialesCambiarClave } from 'src/app/models/credenciales-cambiar-clave.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SecurityService } from 'src/app/services/compartido/security.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

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
      username: ["", [Validators.required/* , Validators.email, Validators.minLength(generalData.EMAIL_MIN_LENGHT) */]],
      password: ["", [Validators.required, Validators.minLength(generalData.PASSWORD_MIN_LENGHT)]],
      passwordNew: ["", [Validators.required, Validators.minLength(generalData.PASSWORD_MIN_LENGHT)]]
    });
  }

  login() {
    if (this.form.invalid) {
      openGeneralMessageModal(generalData.INVALID_FORM_MESSAGE)
    } else {
      this.securityServices.GetUsuario(this.GetForm['username'].value).subscribe({
        next: (data: UsuarioModel) => {
          if (data) {
            let modelo = new credencialesCambiarClave(); // Modelo donde podremos utilizar para cojer la informacion que viene desde el login
            modelo.user = data._id;
            modelo.password = MD5(this.GetForm['password'].value).toString();
            modelo.passwordNew = MD5(this.GetForm['passwordNew'].value).toString();
            console.log(modelo);

            this.securityServices.cambiarClave(modelo).subscribe({
              next: () => {
                openGeneralMessageModal(generalData.PASSWORD_CHANGE)
                this.router.navigate(["/home"])
              },
              error: (error: any) => {
                openGeneralMessageModal(generalData.GENERAL_ERROR_MESSAGE)
              }
            });
          }
        }
      });


    }


  }

  get GetForm() {
    return this.form.controls;
  }

}
