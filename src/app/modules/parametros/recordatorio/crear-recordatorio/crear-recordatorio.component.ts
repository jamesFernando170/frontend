import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { notificacionCorreo } from 'src/app/models/notificacionCorreo.model';
import { notificacionSms } from 'src/app/models/notificacionSms.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { CorreoNotificacionesService } from 'src/app/services/correo-notificaciones/correo-notificaciones.service';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
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
    private correoNotificaciones: CorreoNotificacionesService,
    private juradoService: JuradoService,
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
    let correoNoti = new notificacionCorreo();
    let smsNoti = new notificacionSms();
    console.log(descripcion, fecha, hora, tipoRecordatorio, id);

    this.invitacionService.obtenerInvitacionEvaluar(id).subscribe({
      next: (invitacion: invitacionEvaluarModel) => {
        if (invitacion.estadoInvitacion === "Aceptado") {
          openGeneralMessageModal(generalData.recordatorioInvalido)
          this.router.navigate(["/parametros/listar-invitacion-evaluar"]);
        } else {
          let idJurado = invitacion.idJurado;
          this.juradoService.obtenerJurado(idJurado).subscribe({
            next: (jurado: JuradoModel) => {
              if (tipoRecordatorio === "correo electronico") {
                correoNoti.destinatario = jurado.correo;
                correoNoti.asunto = "Recordatorio a solicitud";
                correoNoti.mensaje = `Hola ${jurado.nombre} se le recuerda que fue invitado a calificar una solicitud`;
                this.correoNotificaciones.enviarCorreo(correoNoti).subscribe({
                  next: (correo: notificacionCorreo) => {
                    console.log(correo);
                  }
                })
              } else if (tipoRecordatorio === "mensaje") {
                smsNoti.destino = jurado.telefono;
                smsNoti.mensaje = `Hola ${jurado.nombre} se le recuerda que fue invitado a calificar una solicitud`;
                this.correoNotificaciones.enviarSms(smsNoti).subscribe({
                  next: (sms: notificacionSms) => {
                    console.log(sms);
                    
                  }
                })
                
              }
            }
          })
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
