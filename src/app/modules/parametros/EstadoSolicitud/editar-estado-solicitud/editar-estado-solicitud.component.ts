import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { estadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parametros/estado-solicitud.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-editar-estado-solicitud',
  templateUrl: './editar-estado-solicitud.component.html',
  styleUrls: ['./editar-estado-solicitud.component.css']
})
export class EditarEstadoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstadoSolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.SearchRecord();
  }

  createForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: estadoSolicitudModel) => {
        this.GetForm['id'].setValue(data.id);
        this.GetForm['nombre'].setValue(data.nombre);
      }
    });
  }

  SaveRecord(){
    let model = new estadoSolicitudModel();
    model.id = this.GetForm['id'].value;
    model.nombre = this.GetForm['nombre'].value;
    this.service.EditRecord(model).subscribe({
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

