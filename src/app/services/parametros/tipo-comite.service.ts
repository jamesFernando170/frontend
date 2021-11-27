import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoComiteService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoComiteModel[]>{
    return this.http.get<TipoComiteModel[]>(`${this.url}/tipos-comites`);
  }

  SaveRecord(data: TipoComiteModel):  Observable<TipoComiteModel>{
    return this.http.post<TipoComiteModel>(`${this.url}/tipos-comites`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<TipoComiteModel>{
    return this.http.get<TipoComiteModel>(`${this.url}/tipos-comites/${id}`);
  }

  EditRecord(data: TipoComiteModel): Observable<TipoComiteModel> {
    return this.http.put<TipoComiteModel>(
      `${this.url}/tipos-comites/${data.id}`,
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
      `${this.url}/tipos-comites/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
