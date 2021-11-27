import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<TipoVinculacionModel[]>{
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipo-vinculacions`);
  }

  SaveRecord(data: TipoVinculacionModel):  Observable<TipoVinculacionModel>{
    return this.http.post<TipoVinculacionModel>(`${this.url}/tipo-vinculacions`, {
      nombreTipo: data.nombreTipo
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<TipoVinculacionModel>{
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipo-vinculacions/${id}`);
  }

  EditRecord(data: TipoVinculacionModel): Observable<TipoVinculacionModel> {
    return this.http.put<TipoVinculacionModel>(
      `${this.url}/tipo-vinculacions/${data.id}`,
      {
        id: data.id,
        nombreTipo: data.nombreTipo
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/tipo-vinculacions/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
