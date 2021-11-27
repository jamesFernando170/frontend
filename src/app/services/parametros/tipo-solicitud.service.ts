import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parametros/tipo-solicitud.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoSolicitudModel[]>{
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipo-solicituds`);
  }

  SaveRecord(data: TipoSolicitudModel):  Observable<TipoSolicitudModel>{
    return this.http.post<TipoSolicitudModel>(`${this.url}/tipo-solicituds`, {
      nombre: data.nombre,
      formato: data.formato
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<TipoSolicitudModel>{
    return this.http.get<TipoSolicitudModel>(`${this.url}/tipo-solicituds/${id}`);
  }

  EditRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel> {
    return this.http.put<TipoSolicitudModel>(
      `${this.url}/tipo-solicituds/${data.id}`,
      {
        id: data.id,
        nombre: data.nombre,
        formato: data.formato
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/tipo-solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
