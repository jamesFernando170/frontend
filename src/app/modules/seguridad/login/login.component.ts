import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generalData } from 'src/app/config/general-data';
import { userCredentialsModel } from 'src/app/models/credenciales-usuario.model';
import { MD5 } from 'crypto-js';
import { SecurityService } from 'src/app/services/compartido/security.service';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { Router } from '@angular/router';
import { roleservice } from 'src/app/services/usuarios/rol.service';
import { RolModel } from 'src/app/models/usuario/rol.model';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  listaRoles: RolModel[] = [];

  constructor(
    private fb: FormBuilder,
    private securityServices: SecurityService,
    private localStorageServices: LocalStorageService,
    private router: Router,
    private serviceRol: roleservice,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
  }

  GetOptionsToSelects() {
    //obtención de la lista
    this.serviceRol.GetRecordList().subscribe(
      {
        next: (data: RolModel[]) => {
          this.listaRoles = data;
          setTimeout(() => {
            InitSelectById("selRol");
          }, 100);

        }
      }
    )
  }

  createForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(generalData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(generalData.PASSWORD_MIN_LENGHT)]],
      rolUsuario: ["", [Validators.required]],
    });
  }

  login() {
    if (this.form.invalid) {
      openGeneralMessageModal(generalData.INVALID_FORM_MESSAGE)
    } else {
      let modelo = new userCredentialsModel(); // Modelo donde podremos utilizar para cojer la informacion que viene desde el login
      modelo.username = this.GetForm['username'].value;
      modelo.password = MD5(this.GetForm['password'].value).toString();
      modelo.rol = this.GetForm['rolUsuario'].value;
      console.log(modelo.rol);

      this.securityServices.Login(modelo).subscribe({
        next: (data: SessionData) => {
          if (data.usuario) {
            console.log(data);
            this.localStorageServices.SaveSessionData(data);
            data.isLoggedIn = true;
            this.securityServices.RefreshSessionData(data);
            this.router.navigate(["/home"])
          }
          else{
            openGeneralMessageModal(generalData.rolInvalido)
          }

        },
        error: (error: any) => {
          openGeneralMessageModal(generalData.GENERAL_ERROR_MESSAGE)
        }
      });
    }
  }

  get GetForm() {
    return this.form.controls;
  }

}
