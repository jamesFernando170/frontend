import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { TipoComiteService } from 'src/app/services/parametros/tipo-comite.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-tipo-comite',
  templateUrl: './crear-tipo-comite.component.html',
  styleUrls: ['./crear-tipo-comite.component.css']
})
export class CrearTipoComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoComiteService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new TipoComiteModel();
    model.nombre = this.GetForm['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoComiteModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-comite"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

  get GetForm() {
    return this.form.controls;
  }

}
