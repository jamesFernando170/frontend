import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { RecordatorioModel } from 'src/app/models/invitacionEvaluar/Recordatorio.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioLlamadaService {

  url: string = generalData.BUSSINES_URL;
  token: string = "";
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  SaveRecord(data: RecordatorioModel): Observable<RecordatorioModel> {
    return this.http.post<RecordatorioModel>(`${this.url}/recordatorios`, {
      descripcion: data.descripcion,
      fecha: data.fecha,
      hora: data.hora,
      tipoRecordatorio: data.tipoRecordatorio,
      idInvitacionEvaluar: data.idInvitacionEvaluar
    },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      })
  }
}
