import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-jurado',
  templateUrl: './eliminar-jurado.component.html',
  styleUrls: ['./eliminar-jurado.component.css']
})
export class EliminarJuradoComponent implements OnInit {

  id: number = 0;
  nombre: string = "";
  apellidos: string = "";
  telefono: string = "";
  correo: string = "";
  entidad: string = "";
  documento: string = "";
  fecha_nacimiento: string = "";

  constructor(
    private router: Router,
    private service: JuradoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        if(data.id && data.nombre && data.apellidos && data.telefono && data.correo && data.entidad && data.documento && data.fecha_nacimiento ){
          this.id = data.id;
          this.nombre = data.nombre;
          this.apellidos = data.apellidos;
          this.telefono = data.telefono;
          this.correo = data.correo;
          this.entidad = data.entidad;
          this.documento = data.documento;
          this.fecha_nacimiento = data.fecha_nacimiento;
        }
        
      }
    });
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: JuradoModel) =>{
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-jurado"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

}

