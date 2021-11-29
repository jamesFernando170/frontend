import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"d_pertenece_f"}]}`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<DepartamentoModel[]>{
    console.log(this.http.get<DepartamentoModel[]>(`${this.url}/departamentos${this.filter}`));
    
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos${this.filter}`);
  }

  SaveRecord(data: DepartamentoModel):  Observable<DepartamentoModel>{
    return this.http.post<DepartamentoModel>(`${this.url}/departamentos`, {
      nombre: data.nombre,
      idFacultad: data.idFacultad
      //facultad?: FacultadModel
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: number): Observable<DepartamentoModel>{
    return this.http.get<DepartamentoModel>(`${this.url}/departamentos/${id}`);
  }

  EditRecord(data: DepartamentoModel): Observable<DepartamentoModel> {
    return this.http.put<DepartamentoModel>(
      `${this.url}/departamentos/${data.id}`,
      {
        id: data.id,
        nombre: data.nombre,
        idFacultad: data.idFacultad
        //facultad?: FacultadModel
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete(
      `${this.url}/departamentos/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}

