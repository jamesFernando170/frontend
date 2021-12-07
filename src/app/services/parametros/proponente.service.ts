import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { UploadedFileModel } from 'src/app/models/solicitud/uploaded.file.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"p_tienen_tv"}]}`;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProponenteModel[]> {
    return this.http.get<ProponenteModel[]>(`${this.url}/proponente-trabajos${this.filter}`);
  }

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.post<ProponenteModel>(`${this.url}/proponente-trabajos`, {
      primerNombre: data.primerNombre,
      segundoNombre: data.segundoNombre,
      primerApellido: data.primerApellido,
      segundoApellido: data.segundoApellido,
      correo: data.correo,
      celular: data.celular,
      idTipoVinculacion: data.idTipoVinculacion
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }

  SearchRecord(id: number): Observable<ProponenteModel> {
    return this.http.get<ProponenteModel>(`${this.url}/proponente-trabajos/${id}`);
  }

  EditRecord(data: ProponenteModel): Observable<ProponenteModel> {
    return this.http.put<ProponenteModel>(
      `${this.url}/proponente-trabajos/${data.id}`,
      {
        id: data.id,
        primerNombre: data.primerNombre,
        segundoNombre: data.segundoNombre,
        primerApellido: data.primerApellido,
        segundoApellido: data.segundoApellido,
        correo: data.correo,
        celular: data.celular,
        /* idTipoVinculacion: data.idTipoVinculacion */
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: number): Observable<any> {
    console.log("ID" + id);
    
    return this.http.delete(
      `${this.url}/proponente-trabajos/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  UploadFile(formData: FormData): Observable<UploadedFileModel> {
    return this.http.post<UploadedFileModel>(
      `${this.url}/CargarImagenPersona`, //apunta al imagen documento de solicitud
      formData,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
