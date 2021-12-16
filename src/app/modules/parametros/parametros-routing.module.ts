import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { CrearAreaInvestigacionComponent } from './AreaInvestigacion/crear-area-investigacion/crear-area-investigacion.component';
import { EditarAreaInvestigacionComponent } from './AreaInvestigacion/editar-area-investigacion/editar-area-investigacion.component';
import { EliminarAreaInvestigacionComponent } from './AreaInvestigacion/eliminar-area-investigacion/eliminar-area-investigacion.component';
import { ListarAreaInvestigacionComponent } from './AreaInvestigacion/listar-area-investigacion/listar-area-investigacion.component';
import { CrearDepartamentoComponent } from './Departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './Departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './Departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './Departamento/listar-departamento/listar-departamento.component';
import { CrearEstadoSolicitudComponent } from './EstadoSolicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { EditarEstadoSolicitudComponent } from './EstadoSolicitud/editar-estado-solicitud/editar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './EstadoSolicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './EstadoSolicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { CrearGfacultadComponent } from './Facultad/crear-gfacultad/crear-gfacultad.component';
import { EditarFacultadComponent } from './Facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './Facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './Facultad/listar-facultad/listar-facultad.component';
import { ListarInvitacionEvaluarComponent } from './invitacion-evaluar/listar-invitacion-evaluar/listar-invitacion-evaluar.component';
import { RecordatorioLlamadaComponent } from './invitacion-evaluar/recordatorio-llamada/recordatorio-llamada.component';
import { CrearJuradoComponent } from './Jurado/crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './Jurado/editar-jurado/editar-jurado.component';
import { EliminarJuradoComponent } from './Jurado/eliminar-jurado/eliminar-jurado.component';
import { ListarJuradoComponent } from './Jurado/listar-jurado/listar-jurado.component';
import { CrearModalidadComponent } from './Modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './Modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './Modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './Modalidad/listar-modalidad/listar-modalidad.component';
import { CrearProponenteComponent } from './proponente/crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './proponente/editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './proponente/eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './proponente/listar-proponente/listar-proponente.component';
import { CrearRecordatorioComponent } from './recordatorio/crear-recordatorio/crear-recordatorio.component';
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
    component: CrearAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-area-investigacion",
    component: EditarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-area-investigacion/:id",
    component: EditarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-area-investigacion/:id",
    component: EliminarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-area-investigacion",
    component: EliminarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-area-investigacion",
    component: ListarAreaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**Departamento */
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-departamento/:id",
    component: EditarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-departamento/:id",
    component: EliminarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-departamento",
    component: EditarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-departamento",
    component: EliminarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-departamento",
    component: ListarDepartamentoComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**Facultad */
  {
    path: "crear-gfacultad",
    component: CrearGfacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-facultad/:id",
    component: EditarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-facultad/:id",
    component: EliminarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-facultad",
    component: ListarFacultadComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**Jurado*/
  {
    path: "crear-jurado",
    component: CrearJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-jurado",
    component: EditarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-jurado/:id",
    component: EditarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-jurado/:id",
    component: EliminarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-jurado",
    component: EliminarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-jurado",
    component: ListarJuradoComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**Modalidad*/
  {
    path: "crear-modalidad",
    component: CrearModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-modalidad/:id",
    component: EditarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-modalidad/:id",
    component: EliminarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-modalidad",
    component: EditarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-modalidad",
    component: EliminarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-modalidad",
    component: ListarModalidadComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**Proponente */
  {
    path: "crear-proponente",
    component: CrearProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-proponente",
    component: EditarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-proponente/:id",
    component: EditarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-proponente/:id",
    component: EliminarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-proponente",
    component: EliminarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-proponente",
    component: ListarProponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**TipoComite */
  {
    path: "crear-tipo-comite",
    component: CrearTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-comite",
    component: EditarTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-comite/:id",
    component: EditarTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-tipo-comite/:id",
    component: EliminarTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-tipo-comite",
    component: EliminarTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-tipo-comite",
    component: ListarTipoComiteComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**TipoSolicitud */
  {
    path: "crear-tipo-solicitud",
    component: CrearTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-solicitud/:id",
    component: EditarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-tipo-solicitud/:id",
    component: EliminarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-solicitud",
    component: EditarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  
  {
    path: "eliminar-tipo-solicitud",
    component: EliminarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-tipo-solicitud",
    component: ListarTipoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  /**TipoVinculacion */
  {
    path: "crear-tipo-vinculacion",
    component: CrearTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-vinculacion/:id",
    component: EditarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  }, {
    path: "eliminar-tipo-vinculacion/:id",
    component: EliminarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-tipo-vinculacion",
    component: EditarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-tipo-vinculacion",
    component: EliminarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-tipo-vinculacion",
    component: ListarTipoVinculacionComponent,
    canActivate: [AuthenticatedGuard]
  },
  // Estado de Solicitud
  {
    path: "crear-estado-solicitud",
    component: CrearEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-estado-solicitud/:id",
    component: EditarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  }, 
  {
    path: "eliminar-estado-solicitud/:id",
    component: EliminarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-estado-solicitud",
    component: EditarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-estado-solicitud",
    component: EliminarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-estado-solicitud",
    component: ListarEstadoSolicitudComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-invitacion-evaluar",
    component: ListarInvitacionEvaluarComponent,
    canActivate: [AuthenticatedGuard] 
  }, 
  // Recordatorio
  {
    path: "crear-recordatorio",
    component: CrearRecordatorioComponent 
  },
  {
    path: "crear-recordatorio/:id",
    component: CrearRecordatorioComponent 
  },
  {
    path: "recordatorio-llamada/:id",
    component: RecordatorioLlamadaComponent 
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
