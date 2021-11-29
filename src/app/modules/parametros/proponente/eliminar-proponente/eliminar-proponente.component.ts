import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-eliminar-proponente',
  templateUrl: './eliminar-proponente.component.html',
  styleUrls: ['./eliminar-proponente.component.css']
})
export class EliminarProponenteComponent implements OnInit {

  id: number = 0;
  primerNombre: string = "";
  segundoNombre: string = "";
  primerApellido: string = "";
  segundoApellido: string = "";
  correo: string = "";
  celular: string = "";
  fotografia: string = "";
  idTipoVinculacion: number = 0;

  constructor(
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        if (data.id && data.primerNombre && data.segundoNombre && data.primerApellido && data.segundoApellido && data.correo && data.celular && data.fotografia && data.idTipoVinculacion) {
          this.id = data.id;
          this.primerNombre = data.primerNombre;
          this.segundoNombre = data.segundoNombre;
          this.primerApellido = data.primerApellido;
          this.segundoApellido = data.segundoApellido;
          this.correo = data.correo;
          this.celular = data.celular;
          this.fotografia = data.fotografia;
          this.idTipoVinculacion = data.idTipoVinculacion;
        }

      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: ProponenteModel) => {
        openGeneralMessageModal(generalData.REMOVE_MESSAGE);
        this.router.navigate(["/parametros/listar-facultad"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }
}
