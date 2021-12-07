import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';

@Component({
  selector: 'app-listar-proponente',
  templateUrl: './listar-proponente.component.html',
  styleUrls: ['./listar-proponente.component.css']
})
export class ListarProponenteComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: ProponenteModel[] = [];

  constructor(
    private service: ProponenteService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }


  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) => {
        console.log(data[1].p_tienen_tv?.nombreTipo);        
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
