import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-tipo-vinculacion',
  templateUrl: './crear-tipo-vinculacion.component.html',
  styleUrls: ['./crear-tipo-vinculacion.component.css']
})
export class CrearTipoVinculacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoVinculacionService
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
    let model = new TipoVinculacionModel();
    model.nombreTipo = this.GetForm['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoVinculacionModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-vinculacion"]);
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
