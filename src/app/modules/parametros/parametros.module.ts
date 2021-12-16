import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearTipoVinculacionComponent } from './TipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './TipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './TipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './TipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';
import { CrearGfacultadComponent } from './Facultad/crear-gfacultad/crear-gfacultad.component';
import { EditarFacultadComponent } from './Facultad/editar-facultad/editar-facultad.component';
import { ListarFacultadComponent } from './Facultad/listar-facultad/listar-facultad.component';
import { EliminarFacultadComponent } from './Facultad/eliminar-facultad/eliminar-facultad.component';
import { CrearDepartamentoComponent } from './Departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './Departamento/editar-departamento/editar-departamento.component';
import { ListarDepartamentoComponent } from './Departamento/listar-departamento/listar-departamento.component';
import { EliminarDepartamentoComponent } from './Departamento/eliminar-departamento/eliminar-departamento.component';
import { CrearTipoSolicitudComponent } from './TipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './TipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './TipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './TipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { CrearModalidadComponent } from './Modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './Modalidad/editar-modalidad/editar-modalidad.component';
import { ListarModalidadComponent } from './Modalidad/listar-modalidad/listar-modalidad.component';
import { EliminarModalidadComponent } from './Modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { CrearTipoComiteComponent } from './tipoComite/crear-tipo-comite/crear-tipo-comite.component';
import { EditarTipoComiteComponent } from './tipoComite/editar-tipo-comite/editar-tipo-comite.component';
import { ListarTipoComiteComponent } from './tipoComite/listar-tipo-comite/listar-tipo-comite.component';
import { EliminarTipoComiteComponent } from './tipoComite/eliminar-tipo-comite/eliminar-tipo-comite.component';
import { CrearAreaInvestigacionComponent } from './AreaInvestigacion/crear-area-investigacion/crear-area-investigacion.component';
import { EditarAreaInvestigacionComponent } from './AreaInvestigacion/editar-area-investigacion/editar-area-investigacion.component';
import { ListarAreaInvestigacionComponent } from './AreaInvestigacion/listar-area-investigacion/listar-area-investigacion.component';
import { EliminarAreaInvestigacionComponent } from './AreaInvestigacion/eliminar-area-investigacion/eliminar-area-investigacion.component';
import { CrearJuradoComponent } from './Jurado/crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './Jurado/editar-jurado/editar-jurado.component';
import { ListarJuradoComponent } from './Jurado/listar-jurado/listar-jurado.component';
import { EliminarJuradoComponent } from './Jurado/eliminar-jurado/eliminar-jurado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CrearProponenteComponent } from './proponente/crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './proponente/editar-proponente/editar-proponente.component';
import { ListarProponenteComponent } from './proponente/listar-proponente/listar-proponente.component';
import { EliminarProponenteComponent } from './proponente/eliminar-proponente/eliminar-proponente.component';
import { CrearEstadoSolicitudComponent } from './EstadoSolicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { EditarEstadoSolicitudComponent } from './EstadoSolicitud/editar-estado-solicitud/editar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './EstadoSolicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { ListarEstadoSolicitudComponent } from './EstadoSolicitud/listar-estado-solicitud/listar-estado-solicitud.component';
import { CrearInvitacionEvaluarComponent } from './invitacion-evaluar/crear-invitacion-evaluar/crear-invitacion-evaluar.component';
import { EditarInvitacionEvaluarComponent } from './invitacion-evaluar/editar-invitacion-evaluar/editar-invitacion-evaluar.component';
import { ListarInvitacionEvaluarComponent } from './invitacion-evaluar/listar-invitacion-evaluar/listar-invitacion-evaluar.component';
import { EliminarInvitacionEvaluarComponent } from './invitacion-evaluar/eliminar-invitacion-evaluar/eliminar-invitacion-evaluar.component';
import { RecordatorioLlamadaComponent } from './invitacion-evaluar/recordatorio-llamada/recordatorio-llamada.component';
import { CrearRecordatorioComponent } from './recordatorio/crear-recordatorio/crear-recordatorio.component';
import { ListarRecordatorioComponent } from './recordatorio/listar-recordatorio/listar-recordatorio.component';


@NgModule({
  declarations: [
    CrearTipoVinculacionComponent,
    EditarTipoVinculacionComponent,
    EliminarTipoVinculacionComponent,
    ListarTipoVinculacionComponent,
    CrearGfacultadComponent,
    EditarFacultadComponent,
    ListarFacultadComponent,
    EliminarFacultadComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    ListarDepartamentoComponent,
    EliminarDepartamentoComponent,
    CrearTipoSolicitudComponent,
    EditarTipoSolicitudComponent,
    ListarTipoSolicitudComponent,
    EliminarTipoSolicitudComponent,
    CrearModalidadComponent,
    EditarModalidadComponent,
    ListarModalidadComponent,
    EliminarModalidadComponent,
    CrearTipoComiteComponent,
    EditarTipoComiteComponent,
    ListarTipoComiteComponent,
    EliminarTipoComiteComponent,
    CrearAreaInvestigacionComponent,
    EditarAreaInvestigacionComponent,
    ListarAreaInvestigacionComponent,
    EliminarAreaInvestigacionComponent,
    CrearJuradoComponent,
    EditarJuradoComponent,
    ListarJuradoComponent,
    EliminarJuradoComponent,
    CrearProponenteComponent,
    EditarProponenteComponent,
    ListarProponenteComponent,
    EliminarProponenteComponent,
    CrearEstadoSolicitudComponent,
    EditarEstadoSolicitudComponent,
    EliminarEstadoSolicitudComponent,
    ListarEstadoSolicitudComponent,
    CrearInvitacionEvaluarComponent,
    EditarInvitacionEvaluarComponent,
    ListarInvitacionEvaluarComponent,
    EliminarInvitacionEvaluarComponent,
    RecordatorioLlamadaComponent,
    CrearRecordatorioComponent,
    ListarRecordatorioComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ParametrosModule { }
