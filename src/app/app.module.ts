import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProponenteComponent } from './modules/parametros/proponente/crear-proponente/crear-proponente.component';
import { ListarProponenteComponent } from './modules/parametros/proponente/listar-proponente/listar-proponente.component';
import { EditarProponenteComponent } from './modules/parametros/proponente/editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './modules/parametros/proponente/eliminar-proponente/eliminar-proponente.component';
import { HeaderComponent } from './public/template/header/header.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/errors/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component'; 
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { VincularJuradoComponent } from './modules/solicitud/vincular-jurado/vincular-jurado.component'
/* import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor'; */

@NgModule({
  declarations: [
    AppComponent,
    /* CrearProponenteComponent,
    ListarProponenteComponent,
    EditarProponenteComponent,
    EliminarProponenteComponent, */
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent,
/*     VincularJuradoComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /* {
      provide: HTTP_INTERCEPTORS,useClass: AuthTokenInterceptor, multi: true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
