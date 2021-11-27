import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';

@Component({
  selector: 'app-listar-area-investigacion',
  templateUrl: './listar-area-investigacion.component.html',
  styleUrls: ['./listar-area-investigacion.component.css']
})
export class ListarAreaInvestigacionComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: AreaInvestigacionModel[] = [];

  constructor(
    private service: AreaInvestigacionService
    ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: AreaInvestigacionModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}


