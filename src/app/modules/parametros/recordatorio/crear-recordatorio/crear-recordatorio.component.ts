import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-recordatorio',
  templateUrl: './crear-recordatorio.component.html',
  styleUrls: ['./crear-recordatorio.component.css']
})
export class CrearRecordatorioComponent implements OnInit {

  /* listaProponentes: ProponenteModel[] = []; */ // atributos para usar en el html, en la parte de listas desplegables
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    /* private service: recordatorioService, */
    private invitacionService: InvitacionEvaluarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      descripcion: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      hora: ["", [Validators.required]],
      tipoRecordatorio: ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let descripcion = this.GetForm['descripcion'].value;
    let fecha = this.GetForm['fecha'].value;
    let hora = this.GetForm['hora'].value;
    let tipoRecordatorio = this.GetForm['tipoRecordatorio'].value;
    let id = parseInt(this.route.snapshot.params["id"]);
    console.log(descripcion, fecha, hora, tipoRecordatorio, id);

    this.invitacionService.obtenerInvitacionEvaluar(id).subscribe({
      next: (data: invitacionEvaluarModel) => {
        if (data.estadoInvitacion === "Aceptado") {
          openGeneralMessageModal(generalData.recordatorioInvalido)
          this.router.navigate(["/parametros/listar-invitacion-evaluar"]);
        } else {

        }

      }
    })


    /* this.service.asociarProponeteSolicitud(id, IdProponentes).subscribe({
      next: () => {
        console.log("Sirvio Perri");
        this.router.navigate(["/solicitud/listar-solicitud"]);
      }
    }) */

  }

  get GetForm() {
    return this.form.controls;
  }

}
