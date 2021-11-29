import { Component, OnInit } from '@angular/core';
import { generalData } from 'src/app/config/general-data';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  pageSize: number = generalData.RECORDS_BY_PAGE;
  p: number = 1;
  total: number = 0;
  recordList: UsuarioModel[] = [];

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data:  UsuarioModel[]) => {
        this.recordList = data;
        this.total = this.recordList.length;
      }
    })
  }
}
