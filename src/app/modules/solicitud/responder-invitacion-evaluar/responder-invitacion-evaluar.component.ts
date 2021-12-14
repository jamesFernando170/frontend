import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-responder-invitacion-evaluar',
  templateUrl: './responder-invitacion-evaluar.component.html',
  styleUrls: ['./responder-invitacion-evaluar.component.css']
})
export class ResponderInvitacionEvaluarComponent implements OnInit {

  constructor(
    private router: Router,
    private service: SolicitudService,
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    openGeneralMessageModal(generalData.rechazarSolicitud);
  }

  toAccept() {
    let url = this.router.parseUrl(this.router.url);
    let hash = url.queryParams['hash'];
    
    this.service.hash(hash).subscribe({
      next: (data: invitacionEvaluarModel) => {
        data.estadoInvitacion = "Aceptado";
        
        openGeneralMessageModal(generalData.cambioEstado);
        this.service.actualizarInvitacion(data).subscribe({

        })    
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    })
  }

}
