import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { EvaluarService } from 'src/app/services/evaluar/evaluar.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

@Component({
  selector: 'app-listar-evaluaciones',
  templateUrl: './listar-evaluaciones.component.html',
  styleUrls: ['./listar-evaluaciones.component.css']
})
export class ListarEvaluacionesComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: SolicitudModel[] = [];


  constructor(
    private service: EvaluarService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList() {
    let solicitudes = this.service.getRecordList();
    console.log(solicitudes);
    this.recordList = solicitudes;
    this.total = this.recordList.length;
    
    /* this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        console.log(data);        
        this.recordList = data;
        this.total = this.recordList.length;
      }
    }); */
  }
}
