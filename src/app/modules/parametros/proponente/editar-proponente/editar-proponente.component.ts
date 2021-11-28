import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { TipoVinculacionModel } from 'src/app/models/parametros/tipo-vinculacion.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';
import { TipoVinculacionService } from 'src/app/services/parametros/tipo-vinculacion.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-proponente',
  templateUrl: './editar-proponente.component.html',
  styleUrls: ['./editar-proponente.component.css']
})
export class EditarProponenteComponent implements OnInit {

  tipoVinculacionList: TipoVinculacionModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute,
    private tipoVinculacionService: TipoVinculacionService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
    this.SearchRecord();
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

  SearchRecord() {
    let id = parseInt(this.route.snapshot.params["id"]);
    console.log(id);

    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) => {
        console.log(data.id);

        this.GetForm['id'].setValue(data.id);
        this.GetForm['primerNombre'].setValue(data.primerNombre);
        this.GetForm['segundoNombre'].setValue(data.segundoNombre);
        this.GetForm['primerApellido'].setValue(data.primerApellido);
        this.GetForm['segundoApellido'].setValue(data.segundoApellido);
        this.GetForm['correo'].setValue(data.correo);
        this.GetForm['telefono'].setValue(data.celular);
        this.GetForm['fotografia'].setValue(data.fotografia);
      }
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      primerNombre: ["", [Validators.required]],
      segundoNombre: ["", [Validators.required]],
      primerApellido: ["", [Validators.required]],
      segundoApellido: ["", [Validators.required]],
      idFacultad: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      fotografia: ["", [Validators.required]]
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

}
