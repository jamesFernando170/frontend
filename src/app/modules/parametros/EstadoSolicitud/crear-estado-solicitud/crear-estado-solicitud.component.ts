import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { estadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parametros/estado-solicitud.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-estado-solicitud',
  templateUrl: './crear-estado-solicitud.component.html',
  styleUrls: ['./crear-estado-solicitud.component.css']
})
export class CrearEstadoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstadoSolicitudService
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
    let model = new estadoSolicitudModel();
    model.nombre = this.GetForm['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: estadoSolicitudModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-estado-solicitud"]);
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

