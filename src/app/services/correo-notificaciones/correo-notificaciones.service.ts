import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { notificacionCorreo } from 'src/app/models/notificacionCorreo.model';
import { notificacionSms } from 'src/app/models/notificacionSms.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CorreoNotificacionesService {
  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
  ) { }

  enviarCorreo(datos: notificacionCorreo): Observable<notificacionCorreo>{
    console.log(datos);
    return this.http.post(`${this.url}/enviarCorreo`, {
      destinatario: datos.destinatario,
      asunto: datos.asunto,
      mensaje: datos.mensaje
    });
  }

  enviarSms(datos: notificacionSms): Observable<notificacionSms>{
    return this.http.post(`${this.url}/enviarSms`, {
      destino: datos.destino,
      mensaje: datos.mensaje
    });
  }

}
