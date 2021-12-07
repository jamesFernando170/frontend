import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { VincularProponenteComponent } from './vincular-proponente/vincular-proponente.component';
import { VincularJuradoComponent } from './vincular-jurado/vincular-jurado.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    ListarSolicitudComponent,
    EliminarSolicitudComponent,
    VincularProponenteComponent,
    VincularJuradoComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SolicitudModule { }
