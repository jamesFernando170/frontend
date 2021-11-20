import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generalData } from 'src/app/config/general-data';
import { userCredentialsModel } from 'src/app/models/credenciales-usuario.model';
import {MD5} from 'crypto-js';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
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
      openGeneralMessageModal(generalData.VALID_FORM_MESSAGE)
      let modelo = new userCredentialsModel();
      modelo.username = this.GetForm['username'].value;
      modelo.password = MD5(this.GetForm['password'].value).toString();
      console.log(modelo.username, "-", modelo.password);
      
    }
  }

  get GetForm() {
    return this.form.controls;
  }

}
