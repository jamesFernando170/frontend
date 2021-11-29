import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { estadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoSolicitudService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<estadoSolicitudModel[]>{
    return this.http.get<estadoSolicitudModel[]>(`${this.url}/estado-solicituds`);
  }

  SaveRecord(data: estadoSolicitudModel):  Observable<estadoSolicitudModel>{
    return this.http.post<estadoSolicitudModel>(`${this.url}/estado-solicituds`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<estadoSolicitudModel>{
    return this.http.get<estadoSolicitudModel>(`${this.url}/estado-solicituds/${id}`);
  }

  EditRecord(data: estadoSolicitudModel): Observable<estadoSolicitudModel> {
    return this.http.put<estadoSolicitudModel>(
      `${this.url}/estado-solicituds/${data.id}`,
      {
        id: data.id,
        nombre: data.nombre
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/estado-solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
