import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { estadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { EstadoSolicitudService } from 'src/app/services/parametros/estado-solicitud.service';

@Component({
  selector: 'app-listar-estado-solicitud',
  templateUrl: './listar-estado-solicitud.component.html',
  styleUrls: ['./listar-estado-solicitud.component.css']
})
export class ListarEstadoSolicitudComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: estadoSolicitudModel[] = [];

  constructor(
    private service: EstadoSolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }


  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: estadoSolicitudModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}
