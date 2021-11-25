import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-facultad',
  templateUrl: './eliminar-facultad.component.html',
  styleUrls: ['./eliminar-facultad.component.css']
})
export class EliminarFacultadComponent implements OnInit {

  id: number = 0;
  nombre: string = "";

  constructor(
    private router: Router,
    private service: FacultadService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) => {
        if(data.id && data.nombre){
          this.id = data.id;
          this.nombre = data.nombre;
        }
        
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: FacultadModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-facultad"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}
