import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<ModalidadModel[]>{
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidads`);
  }

  SaveRecord(data: ModalidadModel):  Observable<ModalidadModel>{
    return this.http.post<ModalidadModel>(`${this.url}/modalidads`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<ModalidadModel>{
    return this.http.get<ModalidadModel>(`${this.url}/modalidads/${id}`);
  }

  EditRecord(data: ModalidadModel): Observable<ModalidadModel> {
    return this.http.put<ModalidadModel>(
      `${this.url}/modalidads/${data.id}`,
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
      `${this.url}/modalidads/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
