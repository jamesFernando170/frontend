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

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "cambio-clave",
    component: CambioClaveComponent
  },
  {
    path: "recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path: "crear-usuario", /**Estas direcciones podrian ir en otro modulo, si asi se quiere */
    component: CrearUsuarioComponent
  },
  {
    path: "editar-usuario/:id",
    component: EditarUsuarioComponent
  },
  {
    path: "listar-usuario/:id",
    component: ListarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
// *Rol
  {
    path: "crear-rol", /**Estas direcciones podrian ir en otro modulo, si asi se quiere */
    component: CrearRolComponent
  },
  {
    path: "editar-rol/:id",
    component: EditarRolComponent
  },
  {
    path: "listar-rol",
    component: ListarRolComponent
  },
  {
    path: "eliminar-rol/:id",
    component: EliminarRolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
