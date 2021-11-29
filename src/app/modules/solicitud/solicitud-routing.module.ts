import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { ListarSolicitudComponent } from './listar-solicitud/listar-solicitud.component';

const routes: Routes = [
  {
    path: "crear-solicitud",
    component: CrearSolicitudComponent
  },
  {
    path: "editar-solicitud",
    component: EditarSolicitudComponent
  },
  {
    path: "eliminar-solicitud",
    component: EliminarSolicitudComponent
  },
  {
    path: "editar-solicitud/:id",
    component: EditarSolicitudComponent
  },
  {
    path: "eliminar-solicitud/:id",
    component: EliminarSolicitudComponent
  },
  {
    path: "listar-solicitud",
    component: ListarSolicitudComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
