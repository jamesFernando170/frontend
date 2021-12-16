import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './user/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './user/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './user/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './user/listar-usuario/listar-usuario.component';
import { CrearRolComponent } from './Rol/crear-rol/crear-rol.component';
import { EditarRolComponent } from './Rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './Rol/eliminar-rol/eliminar-rol.component';
import { ListarRolComponent } from './Rol/listar-rol/listar-rol.component';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "cambio-clave",
    component: CambioClaveComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path: "crear-usuario", /**Estas direcciones podrian ir en otro modulo, si asi se quiere */
    component: CrearUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-usuario/:id",
    component: EditarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-usuario/:id",
    component: ListarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-usuario",
    component: ListarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-usuario/:id",
    component: EliminarUsuarioComponent,
    canActivate: [AuthenticatedGuard]
  },
// *Rol
  {
    path: "crear-rol", /**Estas direcciones podrian ir en otro modulo, si asi se quiere */
    component: CrearRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "editar-rol/:id",
    component: EditarRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "listar-rol",
    component: ListarRolComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "eliminar-rol/:id",
    component: EliminarRolComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
