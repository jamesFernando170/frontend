import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class InvitacionEvaluarService {
  filter: string = `?filter={"include":[{"relation":"recordatorios"}, {"relation":"resultadoEvaluacions"}]}`;
  url: string = generalData.BUSSINES_URL;

  constructor(
    private http: HttpClient,
  ) { }

  GetRecordList(): Observable<invitacionEvaluarModel[]> {
    return this.http.get<invitacionEvaluarModel[]>(`${this.url}/invitacion-evaluars${this.filter}`); /* verifico cuando tengo los registros, traigo la informacion para mostrarla en la página*/
  }

  obtenerJurado(id?: number): Observable<JuradoModel>{
    return this.http.get<JuradoModel>(`${this.url}/jurados/${id}`);
  }

  obtenerSolicitud(id?: number): Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${this.url}/solicituds/${id}`);
  }
}
