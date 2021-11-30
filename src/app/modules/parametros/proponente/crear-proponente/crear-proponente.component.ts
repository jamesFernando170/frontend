import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { UploadedFileModel } from 'src/app/models/solicitud/uploaded.file.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-proponente',
  templateUrl: './crear-proponente.component.html',
  styleUrls: ['./crear-proponente.component.css']
})
export class CrearProponenteComponent implements OnInit {

  tipoVinculacionList: TipoVinculacionModel[] = [];
  form: FormGroup = new FormGroup({});
  formFile: FormGroup = new FormGroup({});//para los archivos

  url: string = generalData.BUSSINES_URL;
  uploadedFilename?: string = "";
  uploadedFile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private tipoVinculacionService: TipoVinculacionService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.CreateFormFile();
    this.GetOptionsToSelects();

  }

  GetOptionsToSelects() {
    this.tipoVinculacionService.GetRecordList().subscribe(
      {
        next: (data: TipoVinculacionModel[]) => {
          this.tipoVinculacionList = data;
          console.log(this.tipoVinculacionList);

          setTimeout(() => {
            InitSelectById("selTipoVinculacion");
          }, 100);
        }
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      primerNombre: ["", [Validators.required]],
      segundoNombre: ["", [Validators.required]],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      idFacultad: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      fotografia: ["", [Validators.required]],
      idTipoVinculacion: ["", [Validators.required]]
    });
  }

  SaveRecord() {
    let model = new ProponenteModel();
    model.primerNombre = this.GetForm['primerNombre'].value;
    model.segundoNombre = this.GetForm['segundoNombre'].value;
    model.primerApellido = this.GetForm['primerApellido'].value;
    model.segundoApellido = this.GetForm['segundoApellido'].value;
    model.correo = this.GetForm['correo'].value;
    model.celular = this.GetForm['telefono'].value;
    model.fotografia = this.GetForm['fotografia'].value;
    model.idTipoVinculacion = this.GetForm['idTipoVinculacion'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) => {
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-proponente"]);
      },
      error: (err: any) => {
        openGeneralMessageModal(generalData.ERROR_MESSAGE);
      }
    });
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

        this.form.controls["fotografia"].setValue(data.filename)
        console.log(this.form.controls["fotografia"].value);

        this.uploadedFilename = data.filename;
        this.uploadedFile = true;
      }
    })
  }

  CreateFormFile() {
    this.formFile = this.fb.group({
      file: ["", []]  //atributo vacio y sin ningun requerimiento 
    });
  }
}
