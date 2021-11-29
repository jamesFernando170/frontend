import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/usuario/rol.model';
import { roleservice } from 'src/app/services/usuarios/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: RolModel[] = [];

  constructor(
    private service: roleservice
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: RolModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}