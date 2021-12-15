import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordatorioModel } from 'src/app/models/invitacionEvaluar/Recordatorio.model';
import { RecordatorioLlamadaService } from 'src/app/services/invitacion-evaluar/recordatorio-llamada.service';

@Component({
  selector: 'app-recordatorio-llamada',
  templateUrl: './recordatorio-llamada.component.html',
  styleUrls: ['./recordatorio-llamada.component.css']
})
export class RecordatorioLlamadaComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: RecordatorioLlamadaService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      descripcion: ["", [Validators.required]],
      horaLlamada: ["", [Validators.required]]
    });
  }

  /*
  descripcion?: string;
    fecha?: string;
    hora?: string;
    tipoRecordatorio?: string;
    idInvitacionEvaluar?: number;
  */

  SaveRecord(){
    let model = new RecordatorioModel();
    model.descripcion = this.GetForm['descripcion'].value;
    model.hora = this.GetForm['horaLlamada'].value;
    let fecha = new Date();
    model.fecha = fecha.toISOString();

    /* this.service.SaveRecord(model).subscribe({
      next: (data: estadoSolicitudModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-estado-solicitud"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    }); */
  }

  get GetForm() {
    return this.form.controls;
  }


}
