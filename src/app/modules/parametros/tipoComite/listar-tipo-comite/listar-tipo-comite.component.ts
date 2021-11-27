import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { TipoComiteService } from 'src/app/services/parametros/tipo-comite.service';

@Component({
  selector: 'app-listar-tipo-comite',
  templateUrl: './listar-tipo-comite.component.html',
  styleUrls: ['./listar-tipo-comite.component.css']
})
export class ListarTipoComiteComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: TipoComiteModel[] = [];

  constructor(
    private service: TipoComiteService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }


  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoComiteModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}