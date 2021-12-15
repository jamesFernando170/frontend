import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';

@Component({
  selector: 'app-listar-invitacion-evaluar',
  templateUrl: './listar-invitacion-evaluar.component.html',
  styleUrls: ['./listar-invitacion-evaluar.component.css']
})
export class ListarInvitacionEvaluarComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: invitacionEvaluarModel[] = [];


  constructor(
    private service: InvitacionEvaluarService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  juradoInvitacionEvaluar(data: invitacionEvaluarModel) {
    this.service.obtenerJurado(data?.idJurado).subscribe({
      next: (data1: JuradoModel) => {
        data.jurado = data1
        console.log(data.jurado);
      }
    })
    console.log(data);    
  }

  solicitudInvitacionEvaluar(data: invitacionEvaluarModel){
    this.service.obtenerSolicitud(data?.idSolicitud).subscribe({
      next: (data1: SolicitudModel) => {
        data.solicitud = data1;
        console.log(data.solicitud);
      }
    })
    console.log(data);    
  }

  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: invitacionEvaluarModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;

        for (let i = 0; i < data.length; i++) {
          this.juradoInvitacionEvaluar(data[i]);
          this.solicitudInvitacionEvaluar(data[i]);
        }
        /* this.service.obtenerJurado() */
      }
    });
  }
}
