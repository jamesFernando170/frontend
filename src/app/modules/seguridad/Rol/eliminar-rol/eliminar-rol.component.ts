import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/usuario/rol.model';
import { roleservice } from 'src/app/services/usuarios/rol.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-rol',
  templateUrl: './eliminar-rol.component.html',
  styleUrls: ['./eliminar-rol.component.css']
})
export class EliminarRolComponent implements OnInit {

  _id: string = "";
  nombre: string = "";

  constructor(
    private router: Router,
    private service: roleservice,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: RolModel) => {
        if(data._id && data.nombre){
          this._id = data._id;
          this.nombre = data.nombre;
        }
        
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this._id).subscribe({
      next: (data: RolModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/seguridad/listar-rol"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}
