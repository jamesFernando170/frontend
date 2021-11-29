import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url: string = generalData.BUSSINES_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"s_es_ts"}, {"relation":"s_tiene_es"},{"relation":"s_tiene_m"},{"relation":"s_tiene_ai"},{"relation":"tiposComites"}]}`;//mirar que el filtro este bueno, con modalidad, area investigación, estado, tipo solicitud

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
    
  }

  GetRecordList(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.url}/solicituds${this.filter}`); /* verifico cuando tengo los registros, traigo la informacion para mostrarla en la página*/
  }

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel> {
    console.log("TOKEN" + this.token);
    
    return this.http.post<SolicitudModel>(
      `${this.url}/solicituds`, //lo que va en el post del controlador de solicitud
      {        
        //le envio los otributos de solicitud que estan en el solicitud.model, en la carpeta models
        fecha: data.fecha,  
        nombreTrabajo: data.nombreTrabajo ,
        descripcion: data.descripcion ,
        archivo: data.archivo
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  SearchRecord(id: number): Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${this.url}/solicituds/${id}`);
  }

  EditRecord(data: SolicitudModel): Observable<SolicitudModel> {
    return this.http.put<SolicitudModel>(
      `${this.url}/solicituds/${data.id}`,
      {
        id: data.id,
        //le envio los otributos de solicitud que estan en el solicitud.model, en la carpeta models
        fecha: data.fecha,  
        nombreTrabajo: data.nombreTrabajo ,
        descripcion: data.descripcion ,
        archivo: data.archivo
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/solicituds/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

}