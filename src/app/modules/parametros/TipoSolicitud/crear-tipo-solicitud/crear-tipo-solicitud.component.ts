import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/models/parametros/tipo-solicitud.model';
import { DownloadFileModel } from 'src/app/models/solicitud/download.file.model';
import { TipoSolicitudService } from 'src/app/services/parametros/tipo-solicitud.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-tipo-solicitud',
  templateUrl: './crear-tipo-solicitud.component.html',
  styleUrls: ['./crear-tipo-solicitud.component.css']
})
export class CrearTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      formato: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new TipoSolicitudModel();
    model.nombre = this.GetForm['nombre'].value;
    model.formato = this.GetForm['formato'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: TipoSolicitudModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-tipo-solicitud"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
  }

  get GetForm() {
    return this.form.controls;
  }

  download(){
    DownloadFileModel.downloadFile('http://localhost:4200/src/app/archivos/TipoSolicitud.docx','downloadFile');
  }

}