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
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "listar-usuario",
    component: ListarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
