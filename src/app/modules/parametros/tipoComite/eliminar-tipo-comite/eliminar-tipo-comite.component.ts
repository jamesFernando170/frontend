import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { TipoComiteService } from 'src/app/services/parametros/tipo-comite.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-tipo-comite',
  templateUrl: './eliminar-tipo-comite.component.html',
  styleUrls: ['./eliminar-tipo-comite.component.css']
})
export class EliminarTipoComiteComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: TipoComiteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoComiteModel) => {
        if(data.id && data.nombre){
          this.id = data.id;
          this.nombre = data.nombre;
        }
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: TipoComiteModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-comite"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }
}
