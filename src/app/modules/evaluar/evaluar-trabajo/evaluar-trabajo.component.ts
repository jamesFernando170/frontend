import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { ResultadoEvaluacionModel } from 'src/app/models/resultadoEvaluacion/resultadoEvaluacion.model';
import { DownloadFileModel } from 'src/app/models/solicitud/download.file.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { UploadedFileModel } from 'src/app/models/solicitud/uploaded.file.model';
import { EvaluarService } from 'src/app/services/evaluar/evaluar.service';
import { InvitacionEvaluarService } from 'src/app/services/invitacion-evaluar/invitacion-evaluar.service';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;
@Component({
  selector: 'app-evaluar-trabajo',
  templateUrl: './evaluar-trabajo.component.html',
  styleUrls: ['./evaluar-trabajo.component.css']
})
export class EvaluarTrabajoComponent implements OnInit {

  idInvitacion: number = -1;
  form: FormGroup = new FormGroup({});
  formFile: FormGroup = new FormGroup({});//para los archivos

  url: string = generalData.BUSSINES_URL;
  uploadedFilename?: string = "";
  uploadedFile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EvaluarService,
    private route: ActivatedRoute,
    private juradoService: JuradoService,
    private invitacionService: InvitacionEvaluarService,
    private solicitudSevice: SolicitudService,
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.CreateFormFile();
  }


  CreateForm() {
    this.form = this.fb.group({
      descripcion: ["", [Validators.required]],
      archivo: ["", [Validators.required]]//archivo que se carga 
    });
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]  //atributo vacio y sin ningun requerimiento 
    });
  }

  SaveRecord() {
    let model = new ResultadoEvaluacionModel();
    let fecha = new Date();
    model.fecha = fecha.toISOString();

    model.formatoDiligenciado = this.GetForm['archivo'].value;//para poner el archivo
    console.log(this.GetForm['archivo'].value);

    model.descripcion = this.GetForm['descripcion'].value;
    let idSolicitud = parseInt(this.route.snapshot.params["id"]);
    console.log(idSolicitud);

    /*     let invitacion = this.service.getEncontarInvitacion(idSolicitud);
        console.log(invitacion.hash); */

    let invitacion = new invitacionEvaluarModel();
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
          this.invitacionService.GetRecordList().subscribe({
            next: (invitaciones: invitacionEvaluarModel[]) => {
              for (let i = 0; i < invitaciones.length; i++) {
                if (invitaciones[i].idJurado === jurado?.id && invitaciones[i].idSolicitud === idSolicitud) {
                  invitacion = invitaciones[i];
                  console.log(invitacion);

                }
              }
              model.idInvitacionEvaluar = invitacion.id;

              this.service.SaveRecord(model).subscribe({
                next: (data: ResultadoEvaluacionModel) => {
                  if (data.id) {
                    this.invitacionService.obtenerInvitacionEvaluar(invitacion.id).subscribe({
                      next: (data2: invitacionEvaluarModel) => {
                        data2.estadoInvitacion = "Evaluado"
                        this.invitacionService.actualizarInvitacion(data2).subscribe({})
                        this.invitacionService.GetRecordList().subscribe({
                          next: (invitaciones: invitacionEvaluarModel[]) => {
                            let guardadoInvitaciones: invitacionEvaluarModel[] = []
                            let todosEvaluados = true;
                            for (let index = 0; index < invitaciones.length; index++) {
                              if (invitaciones[index].idSolicitud == idSolicitud && invitaciones[index].estadoInvitacion?.toLowerCase() != "rechazado") {
                                guardadoInvitaciones.push(invitaciones[index])
                              }
                            }
                            
                            for (let index = 0; index < guardadoInvitaciones.length; index++) {
                              if (guardadoInvitaciones[index].estadoInvitacion?.toLowerCase() != "evaluado") {
                                todosEvaluados = false;
                                
                              }
                            }
                            //todos evaluados
                            if (todosEvaluados == true) {
                              this.solicitudSevice.obtenerSolicitud(idSolicitud).subscribe({
                                next: (solicitud: SolicitudModel) => {
                                  solicitud.idEstadoSolicitud = 3
                                  this.solicitudSevice.actualizarSolicitud(solicitud).subscribe({})
                                  
                                }
                              })
                            }
                          }
                        })
                      }
                    })
                    openGeneralMessageModal(generalData.SAVED_MESSAGE);
                    this.router.navigate(["/evaluar/listar-evaluaciones"]);
                  }
                },
                error: (err: any) => {
                  openGeneralMessageModal(generalData.ERROR_MESSAGE);
                }
              });

            }

          })

        }

      })

    }
  }

  get GetForm() {
    return this.form.controls;
  }

  //disparador del cambio 
  OnchangeInputFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);//asigno el archivo
    }
  }

  //Subimos el archivo cargado
  UpLoadArchivo() {
    //generar un fornData pero no en HTML, sino por TS
    const formData = new FormData();
    formData.append("file", this.formFile.controls["file"].value) //el primer "file", mismo nombre de documentos en keys del backend...obtengo el archivo

    //lo envío al servicio 
    this.service.UploadFile(formData).subscribe({
      next: (data: UploadedFileModel) => {
        console.log(data.filename);

        this.form.controls["archivo"].setValue(data.filename)
        console.log(this.form.controls["archivo"].value);

        this.uploadedFilename = data.filename;
        this.uploadedFile = true;
      }
    })
  }

  download() {
    DownloadFileModel.downloadFile('http://localhost:4200/src/app/archivos/TipoSolicitud.docx', 'downloadFile');
  }

}
