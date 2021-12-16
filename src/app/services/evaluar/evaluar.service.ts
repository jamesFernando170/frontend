import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { ResultadoEvaluacionModel } from 'src/app/models/resultadoEvaluacion/resultadoEvaluacion.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { UploadedFileModel } from 'src/app/models/solicitud/uploaded.file.model';
import { LocalStorageService } from '../compartido/local-storage.service';
import { InvitacionEvaluarService } from '../invitacion-evaluar/invitacion-evaluar.service';
import { JuradoService } from '../parametros/jurado.service';
import { SolicitudService } from '../solicitud/solicitud.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluarService {

  url: string = generalData.BUSSINES_URL;
  urlUsuarios: string = generalData.ADMIN_USER_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"s_es_ts"}, {"relation":"s_tiene_es"},{"relation":"s_tiene_m"},{"relation":"s_tiene_ai"},{"relation":"tiposComites"}]}`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private juradoService: JuradoService,
    private invitacionEvalurService: InvitacionEvaluarService,
    private solicitudservice: SolicitudService

  ) {
    this.token = this.localStorageService.GetToken();

  }

  getRecordList(): SolicitudModel[]{
    let solicitudes: SolicitudModel[] = [];
    let saved = localStorage.getItem("session-data");
    let correo = "";
    if (saved) {
      let data = JSON.parse(saved);
      correo = data.usuario.correo
      console.log(correo);
    }
    if (correo !== "") {
      this.juradoService.GetRecordList().subscribe({
        next: (data: JuradoModel[]) => {
          let jurado: JuradoModel = new JuradoModel();
          for (let i = 0; i < data.length; i++) {
            if (data[i].correo === correo) {
              jurado = data[i];
            }

          }
          console.log(jurado);
          this.invitacionEvalurService.GetRecordList().subscribe({
            next: (invitaciones: invitacionEvaluarModel[]) => {
              let invi: invitacionEvaluarModel[] = [];
              for (let i = 0; i < invitaciones.length; i++) {
                if (invitaciones[i].idJurado === jurado?.id && invitaciones[i].estadoInvitacion === "Aceptado") {
                  invi.push(invitaciones[i]);
                }
              }
              
              for (let i = 0; i < invi.length; i++) {
                this.http.get<SolicitudModel>(`${this.url}/solicituds/${invi[i].idSolicitud}${this.filter}`).subscribe({
                  next: (s: SolicitudModel) => {
                    solicitudes.push(s);
                  }
                });
              }
              console.log(solicitudes);
              return solicitudes;
            }

          })

        }

      })

    }
    return solicitudes;
  }

  getEncontarInvitacion(id: number): invitacionEvaluarModel{
    let invitacion= new invitacionEvaluarModel();
    let saved = localStorage.getItem("session-data");
    let correo = "";
    if (saved) {
      let data = JSON.parse(saved);
      correo = data.usuario.correo
      console.log(correo);
    }
    if (correo !== "") {
      this.juradoService.GetRecordList().subscribe({
        next: (data: JuradoModel[]) => {
          let jurado: JuradoModel = new JuradoModel();
          for (let i = 0; i < data.length; i++) {
            if (data[i].correo === correo) {
              jurado = data[i];
            }

          }
          console.log(jurado);
          this.invitacionEvalurService.GetRecordList().subscribe({
            next: (invitaciones: invitacionEvaluarModel[]) => {
              for (let i = 0; i < invitaciones.length; i++) {
                if (invitaciones[i].idJurado === jurado?.id && invitaciones[i].idSolicitud === id) {
                  invitacion = invitaciones[i];
                  console.log(invitacion);
                  
                }
              }              
              return invitacion;
            }

          })

        }

      })

    }
    console.log(invitacion);    
    return invitacion;
  }

  //subir el file
  UploadFile(formData: FormData): Observable<UploadedFileModel> {
    return this.http.post<UploadedFileModel>(
      `${this.url}/CargarDocumentoSolicitud`, //apunta al cargar documento de solicitud
      formData,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  SaveRecord(data: ResultadoEvaluacionModel): Observable<ResultadoEvaluacionModel> {
    console.log(data.idInvitacionEvaluar);

    return this.http.post<ResultadoEvaluacionModel>(`${this.url}/resultado-evaluacions`,
      {
        descripcion: data.descripcion,
        fecha: data.fecha,
        formatoDiligenciado: data.formatoDiligenciado,
        idInvitacionEvaluar: data.idInvitacionEvaluar,
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
