import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { LogoutComponent } from './logout/logout.component';
import { CrearUsuarioComponent } from './user/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './user/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './user/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './user/eliminar-usuario/eliminar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    LogoutComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
