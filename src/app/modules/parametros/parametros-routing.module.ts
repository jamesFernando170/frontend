import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAreaInvestigacionComponent } from './AreaInvestigacion/crear-area-investigacion/crear-area-investigacion.component';
import { EditarAreaInvestigacionComponent } from './AreaInvestigacion/editar-area-investigacion/editar-area-investigacion.component';
import { EliminarAreaInvestigacionComponent } from './AreaInvestigacion/eliminar-area-investigacion/eliminar-area-investigacion.component';
import { ListarAreaInvestigacionComponent } from './AreaInvestigacion/listar-area-investigacion/listar-area-investigacion.component';
import { CrearDepartamentoComponent } from './Departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './Departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './Departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './Departamento/listar-departamento/listar-departamento.component';
import { CrearGfacultadComponent } from './Facultad/crear-gfacultad/crear-gfacultad.component';
import { EditarFacultadComponent } from './Facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './Facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './Facultad/listar-facultad/listar-facultad.component';
import { CrearJuradoComponent } from './Jurado/crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './Jurado/editar-jurado/editar-jurado.component';
import { EliminarJuradoComponent } from './Jurado/eliminar-jurado/eliminar-jurado.component';
import { ListarJuradoComponent } from './Jurado/listar-jurado/listar-jurado.component';
import { CrearModalidadComponent } from './Modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './Modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './Modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { CrearProponenteComponent } from './proponente/crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './proponente/editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './proponente/eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './proponente/listar-proponente/listar-proponente.component';
import { CrearTipoComiteComponent } from './tipoComite/crear-tipo-comite/crear-tipo-comite.component';
import { EditarTipoComiteComponent } from './tipoComite/editar-tipo-comite/editar-tipo-comite.component';
import { EliminarTipoComiteComponent } from './tipoComite/eliminar-tipo-comite/eliminar-tipo-comite.component';
import { ListarTipoComiteComponent } from './tipoComite/listar-tipo-comite/listar-tipo-comite.component';
import { CrearTipoSolicitudComponent } from './TipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './TipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './TipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './TipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearTipoVinculacionComponent } from './TipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './TipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './TipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './TipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';

const routes: Routes = [
  /**AreaInvestigacion */
  {
    path: "crear-area-investigacion",
    component: CrearAreaInvestigacionComponent
  },
  {
    path: "editar-area-investigacion",
    component: EditarAreaInvestigacionComponent
  },
  {
    path: "eliminar-area-investigacion",
    component: EliminarAreaInvestigacionComponent
  },
  {
    path: "listar-area-investigacion",
    component: ListarAreaInvestigacionComponent
  },
  /**Departamento */
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent
  },
  {
    path: "editar-departamento",
    component: EditarDepartamentoComponent
  },
  {
    path: "eliminar-departamento",
    component: EliminarDepartamentoComponent
  },
  {
    path: "listar-departamento",
    component: ListarDepartamentoComponent
  },
  /**Facultad */
  {
    path: "crear-gfacultad",
    component: CrearGfacultadComponent
  },
  {
    path: "editar-facultad/:id",
    component: EditarFacultadComponent
  }, {
    path: "eliminar-facultad/:id",
    component: EliminarFacultadComponent
  },
  {
    path: "listar-facultad",
    component: ListarFacultadComponent
  },
  /**Jurado*/
  {
    path: "crear-jurado",
    component: CrearJuradoComponent
  },
  {
    path: "editar-jurado",
    component: EditarJuradoComponent
  },
  {
    path: "eliminar-jurado",
    component: EliminarJuradoComponent
  },
  {
    path: "listar-jurado",
    component: ListarJuradoComponent
  },
  /**Modalidad*/
  {
    path: "crear-modalidad",
    component: CrearModalidadComponent
  },
  {
    path: "editar-modalidad",
    component: EditarModalidadComponent
  },
  {
    path: "eliminar-modalidad",
    component: EliminarModalidadComponent
  },
  {
    path: "listar-modalidad",
    component: EditarModalidadComponent
  },
  /**Proponente */
  {
    path: "crear-proponente",
    component: CrearProponenteComponent
  },
  {
    path: "editar-proponente",
    component: EditarProponenteComponent
  },
  {
    path: "eliminar-proponente",
    component: EliminarProponenteComponent
  },
  {
    path: "listar-proponente",
    component: ListarProponenteComponent
  },
  /**TipoComite */
  {
    path: "crear-tipo-comite",
    component: CrearTipoComiteComponent
  },
  {
    path: "editar-tipo-comite",
    component: EditarTipoComiteComponent
  },
  {
    path: "eliminar-tipo-comite",
    component: EliminarTipoComiteComponent
  },
  {
    path: "listar-tipo-comite",
    component: ListarTipoComiteComponent
  },
  /**TipoSolicitud */
  {
    path: "crear-tipo-solicitud",
    component: CrearTipoSolicitudComponent
  },
  {
    path: "editar-tipo-solicitud",
    component: EditarTipoSolicitudComponent
  },
  {
    path: "eliminar-tipo-solicitud",
    component: EliminarTipoSolicitudComponent
  },
  {
    path: "listar-tipo-solicitud",
    component: ListarTipoSolicitudComponent
  },
  {
    path: "crear-tipo-vinculacion",
    component: CrearTipoVinculacionComponent
  },
  {
    path: "editar-tipo-vinculacion",
    component: EditarTipoVinculacionComponent
  },
  {
    path: "eliminar-tipo-vinculacion",
    component: EliminarTipoVinculacionComponent
  },
  {
    path: "listar-tipo-vinculacion",
    component: ListarTipoVinculacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
