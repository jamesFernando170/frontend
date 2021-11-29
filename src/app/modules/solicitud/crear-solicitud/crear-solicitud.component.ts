import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { TipoComiteModel } from 'src/app/models/parametros/tipo-comite.model';
import { SolicitudModel } from 'src/app/models/solicitud/solicitud.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
import { TipoComiteService } from 'src/app/services/parametros/tipo-comite.service';
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
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private areaInvestigacionService: AreaInvestigacionService,
    private comiteService: TipoComiteService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects(); //trae la información de los selec
  }

  GetOptionsToSelects(){
    //obtención de la lista
    this.areaInvestigacionService.GetRecordList().subscribe(
      {
        next: (data: AreaInvestigacionModel[]) =>{
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
        next: (data: TipoComiteModel[]) =>{
          this.listaComite = data;
          setTimeout(() => {
            InitSelectById("selComite");
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
    });
  }

  SaveRecord(){
    let model = new SolicitudModel();
    model.nombreTrabajo = this.GetForm['nombreTrabajo'].value;
    //model.archivo = this.GetForm['archivo'].value;//para poner el archivo
    model.fecha = this.GetForm['fecha'].value;
    model.descripcion = this.GetForm['descripcion'].value;
    model.tipoSolicitud = this.GetForm['tipoSolicitud'].value;
    model.modalidad = this.GetForm['modalidad'].value;
    model.areaInvestigacion = this.GetForm['areaInvestigacion'].value;
    model.tiposComite = this.GetForm['tiposComite'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: SolicitudModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-Solicitud"]);
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