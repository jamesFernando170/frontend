import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: SolicitudModel[] = [];


  constructor(
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) => {
        console.log(data[0].s_es_ts?.id);        
        this.recordList = data;
        this.total = this.recordList.length;
      }
    });
  }

}