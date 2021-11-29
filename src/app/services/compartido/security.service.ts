import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { credencialesCambiarClave } from 'src/app/models/credenciales-cambiar-clave.model';
import { credencialesRecuperarClave } from 'src/app/models/credenciales-recuperar-clave.model';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { generalData } from '../../config/general-data';
import { userCredentialsModel } from '../../models/credenciales-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData());
  url: string = generalData.ADMIN_USER_URL;

  constructor(
    private http: HttpClient
  ) {
    this.IsThereActiveSession();
  }

  IsThereActiveSession() {
    let data = localStorage.getItem("session-data");
    if (data) {
      let objectData: SessionData = JSON.parse(data);
      objectData.isLoggedIn = true;
      this.RefreshSessionData(objectData);
    }
  }

  RefreshSessionData(data: SessionData) {
    this.sessionDataSubject.next(data);
  }

  GetSessionStatus() {
    return this.sessionDataSubject.asObservable();
  }

  Login(modelo: userCredentialsModel): Observable<SessionData> {
    console.log(modelo.username);

    return this.http.post<SessionData>(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
  }

  RecuperarClave(modelo: credencialesRecuperarClave) {
    console.log(modelo.username);

    return this.http.post(`${this.url}/recuperar-clave`, {
      correo: modelo.username
    });
  }

  cambiarClave(modelo: credencialesCambiarClave) {
    console.log(modelo.user, modelo.passwordNew, modelo.password);

    return this.http.post(`${this.url}/cambiar-clave`,{
      id_usuario: modelo.user,
      clave_actual: modelo.password,
      nueva_clave: modelo.passwordNew
    });
  }

  GetUsuario(correo: string) {
    return this.http.get<UsuarioModel>(`${this.url}usuarios-correo/${correo}`);
  }

}
