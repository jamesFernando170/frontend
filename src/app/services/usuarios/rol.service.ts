import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/usuario/rol.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class roleservice {

  url: string = generalData.ADMIN_USER_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<RolModel[]>{
    return this.http.get<RolModel[]>(`${this.url}/roles`);
  }

  SaveRecord(data: RolModel):  Observable<RolModel>{
    return this.http.post<RolModel>(`${this.url}/roles`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: string): Observable<RolModel>{
    return this.http.get<RolModel>(`${this.url}/roles/${id}`);
  }

  EditRecord(data: RolModel): Observable<RolModel> {
    return this.http.put<RolModel>(
      `${this.url}/roles/${data._id}`,
      {
        _id: data._id,
        nombre: data.nombre
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/roles/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
