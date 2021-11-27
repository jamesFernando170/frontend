import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { DepartamentoService } from 'src/app/services/parametros/departamento.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: DepartamentoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: DepartamentoModel) => {
        if(data.id && data.nombre){
          this.id = data.id;
          this.nombre = data.nombre;
        }
        
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: DepartamentoModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}
