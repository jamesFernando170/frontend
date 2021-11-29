import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  id: string = "";
  nombre: string = "";
  apellidos: string = "";
  documento: string = "";
  fecha_nacimiento: string = "";
  celular: string = "";
  correo: string = "";
  estado: string = "";

  constructor(
    private router: Router,
    private service: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: UsuarioModel) => {
        if(data._id && data.nombre && data.apellidos && data.documento && data.fecha_nacimiento
            && data.celular && data.correo){
          this.id = data._id;
          this.nombre = data.nombre;
          this.apellidos =data.apellidos;
          this.documento = data.documento;
          this.fecha_nacimiento = data.fecha_nacimiento;
          this.celular = data.celular;
          this.correo = data.correo;
          if(data.estado){
            this.estado = "Activo";
          }else{
            this.estado = "Inactivo";
          }
        }  
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: UsuarioModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/seguridad/listar-usuario"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}

