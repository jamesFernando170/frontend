import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AreaInvestigacionService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<AreaInvestigacionModel[]> {
    return this.http.get<AreaInvestigacionModel[]>(`${this.url}/area-investigacions`);
  }

  SaveRecord(data: AreaInvestigacionModel): Observable<AreaInvestigacionModel> {
    return this.http.post<AreaInvestigacionModel>(`${this.url}/area-investigacions`, {
      nombre: data.nombre
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }

  SearchRecord(id: number): Observable<AreaInvestigacionModel> {
    return this.http.get<AreaInvestigacionModel>(`${this.url}/area-investigacions/${id}`);
  }

  EditRecord(data: AreaInvestigacionModel): Observable<AreaInvestigacionModel> {
    return this.http.put<AreaInvestigacionModel>(
      `${this.url}/area-investigacions/${data.id}`,
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

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete(
      `${this.url}/area-investigacions/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
