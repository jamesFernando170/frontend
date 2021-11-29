import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {

  id: number = 0;
  nombreTrabajo: string = "";
  descripcion: string = "";
  fecha: string = "";
  archivo: string = "";
  idAreaInvestigacion: number = 0;
  idEstadoSolicitud: number = 0;
  idModalidad: number = 0;
  idTipoSolicitud: number = 0;

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    console.log(id);
    this.service.SearchRecord(id).subscribe({
      next: (data: SolicitudModel) => {
        console.log(data);
        
        if (data.id && data.nombreTrabajo && data.descripcion && data.fecha && data.idAreaInvestigacion && data.idEstadoSolicitud && data.idModalidad && data.idTipoSolicitud) {
          this.id = data.id;
          this.nombreTrabajo = data.nombreTrabajo;
          this.descripcion = data.descripcion;
          this.fecha = data.fecha;
          this.archivo = "   ";
          this.idAreaInvestigacion = data.idAreaInvestigacion;
          this.idEstadoSolicitud = data.idEstadoSolicitud;
          this.idModalidad = data.idModalidad;
          this.idTipoSolicitud = data.idTipoSolicitud
        }

      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: SolicitudModel) => {
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-facultad"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}
