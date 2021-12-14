import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<JuradoModel[]>{
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`);
  }

  SaveRecord(data: JuradoModel):  Observable<JuradoModel>{
    return this.http.post< JuradoModel>(`${this.url}/jurados`, {
        nombre: data.nombre,
        apellidos: data.apellidos,
        telefono: data.telefono,
        correo: data.correo,
        entidad: data.entidad,
        clave: data.clave,
        documento: data.documento,
        fecha_nacimiento: data.fecha_nacimiento
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<JuradoModel>{
    return this.http.get< JuradoModel>(`${this.url}/jurados/${id}`);
  }

  EditRecord(data: JuradoModel): Observable<JuradoModel> {
    return this.http.put<JuradoModel>(
      `${this.url}/jurados/${data.id}`,
      {
        id: data.id,
        nombre: data.nombre,
        apellidos: data.apellidos,
        telefono: data.telefono,
        correo: data.correo,
        entidad: data.entidad,
        clave: data.clave,
        documento: data.documento,
        fecha_nacimiento: data.fecha_nacimiento
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/jurados/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
