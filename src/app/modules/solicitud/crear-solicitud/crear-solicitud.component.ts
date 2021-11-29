import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { estadoSolicitudModel } from 'src/app/models/parametros/estadoSolicitud.model';
import { ModalidadModel } from 'src/app/models/parametros/modalidad.model';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { TipoSolicitudModel } from 'src/app/models/parametros/tipo-solicitud.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
import { EstadoSolicitudService } from 'src/app/services/parametros/estado-solicitud.service';
import { ModalidadService } from 'src/app/services/parametros/modalidad.service';
import { TipoComiteService } from 'src/app/services/parametros/tipo-comite.service';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;
@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  listaAreasInvestigacion: AreaInvestigacionModel[] = []; // atributos para usar en el html, en la parte de listas desplegables
  listaComite: TipoComiteModel[] = [];// atributos para usar en el html, en la parte de listas desplegables
  listaModalidad: ModalidadModel[] = [];
  listaTipoSolicitud: TipoSolicitudModel[] = [];
  listaEstadoSolicitud: estadoSolicitudModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private areaInvestigacionService: AreaInvestigacionService,
    private comiteService: TipoComiteService,
    private modalidadService: ModalidadService,
    private tipoSolicitudService: TipoSolicitudService,
    private estadoSolicitudService: EstadoSolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects(); //trae la información de los selec
  }

  GetOptionsToSelects() {
    //obtención de la lista
    this.tipoSolicitudService.GetRecordList().subscribe(
      {
        next: (data: TipoSolicitudModel[]) => {
          this.listaTipoSolicitud = data;
          setTimeout(() => {
            InitSelectById("selTipoSolicitud");
          }, 100);

        }
      }
    )

    this.modalidadService.GetRecordList().subscribe(
      {
        next: (data: ModalidadModel[]) => {
          this.listaModalidad = data;
          setTimeout(() => {
            InitSelectById("selModalidad");
          }, 100);

        }
      }
    )

    this.areaInvestigacionService.GetRecordList().subscribe(
      {
        next: (data: AreaInvestigacionModel[]) => {
          this.listaAreasInvestigacion = data;
          //damos un timpo para que haga un rend de la información
          setTimeout(() => {
            InitSelectById("selAreaInvestigacion");
          }, 100);
        }
      }
    )

    this.comiteService.GetRecordList().subscribe(
      {
        next: (data: TipoComiteModel[]) => {
          this.listaComite = data;
          setTimeout(() => {
            InitSelectById("selComite");
          }, 100);

        }
      }
    )

    this.estadoSolicitudService.GetRecordList().subscribe(
      {
        next: (data: estadoSolicitudModel[]) => {
          this.listaEstadoSolicitud = data;
          setTimeout(() => {
            InitSelectById("selEstado");
          }, 100);

        }
      }
    )

  }

  CreateForm() {
    this.form = this.fb.group({
      fecha: ["", [Validators.required]],
      nombreTrabajo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      tipoSolicitud: ["", [Validators.required]],
      modalidad: ["", [Validators.required]],
      areaInvestigacion: ["", [Validators.required]],
      tiposComite: ["", [Validators.required]],
      estadoSolicitud: ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let model = new SolicitudModel();
    model.nombreTrabajo = this.GetForm['nombreTrabajo'].value;
    console.log(this.GetForm['tipoSolicitud'].value);
    //model.archivo = this.GetForm['archivo'].value;//para poner el archivo
    model.fecha = this.GetForm['fecha'].value;
    model.descripcion = this.GetForm['descripcion'].value;
    model.idTipoSolicitud = parseInt(this.GetForm['tipoSolicitud'].value);
    model.idModalidad = parseInt(this.GetForm['modalidad'].value);
    model.idAreaInvestigacion = parseInt(this.GetForm['areaInvestigacion'].value);
    model.idEstadoSolicitud = parseInt(this.GetForm['estadoSolicitud'].value);
    let IdTiposComites = this.GetForm['tiposComite'].value;

    console.log(model);


    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) => {
        if (data.id) {
          this.service.asociarTiposComiteSolicitud(data.id, IdTiposComites).subscribe({
            next: () => {
              console.log("sirvce");

            }
          })
          openGeneralMessageModal(generalData.SAVED_MESSAGE);
          this.router.navigate(["/solicitud/listar-solicitud"]);
        }
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

  get GetForm() {
    return this.form.controls;
  }



}