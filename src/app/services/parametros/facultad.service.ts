import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<FacultadModel[]>{
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`);
  }

  SaveRecord(data: FacultadModel):  Observable<FacultadModel>{
    return this.http.post<FacultadModel>(`${this.url}/facultads`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<FacultadModel>{
    return this.http.get<FacultadModel>(`${this.url}/facultads/${id}`);
  }

  EditRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.put<FacultadModel>(
      `${this.url}/facultads/${data.id}`,
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
      `${this.url}/facultads/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
