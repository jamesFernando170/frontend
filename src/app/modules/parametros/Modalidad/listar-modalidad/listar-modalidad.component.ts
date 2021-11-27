import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';

@Component({
  selector: 'app-listar-modalidad',
  templateUrl: './listar-modalidad.component.html',
  styleUrls: ['./listar-modalidad.component.css']
})
export class ListarModalidadComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: ModalidadModel[] = [];

  constructor(
    private service: ModalidadService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }


  GetRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: ModalidadModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }

}
