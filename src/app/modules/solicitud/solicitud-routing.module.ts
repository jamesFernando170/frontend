import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';
import { ResponderInvitacionEvaluarComponent } from './responder-invitacion-evaluar/responder-invitacion-evaluar.component';
import { VincularJuradoComponent } from './vincular-jurado/vincular-jurado.component';
import { VincularProponenteComponent } from './vincular-proponente/vincular-proponente.component';

const routes: Routes = [
  {
    path: "crear-solicitud",
    component: CrearSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-solicitud",
    component: EditarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-solicitud",
    component: EliminarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-solicitud/:id",
    component: EditarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-solicitud/:id",
    component: EliminarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-solicitud",
    component: ListarSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "vincular-proponente/:id",
    component: VincularProponenteComponent,
    canActivate: [AuthenticatedGuard]
  }
  ,
  {
    path: "vincular-jurado/:id",
    component: VincularJuradoComponent,
    canActivate: [AuthenticatedGuard]
  }
  ,
  {
    path: "vincular-jurado",
    component: VincularJuradoComponent
  }
  ,
  {
    path: "responder-invitacion-evaluar",
    component: ResponderInvitacionEvaluarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
