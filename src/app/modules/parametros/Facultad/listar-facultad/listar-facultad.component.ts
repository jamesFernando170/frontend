import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

@Component({
  selector: 'app-listar-facultad',
  templateUrl: './listar-facultad.component.html',
  styleUrls: ['./listar-facultad.component.css']
})
export class ListarFacultadComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: FacultadModel[] = [];

  constructor(
    private service: FacultadService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }


  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: FacultadModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}
