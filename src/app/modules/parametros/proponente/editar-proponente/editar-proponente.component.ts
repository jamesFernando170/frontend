import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-proponente',
  templateUrl: './editar-proponente.component.html',
  styleUrls: ['./editar-proponente.component.css']
})
export class EditarProponenteComponent implements OnInit {

  proponenteList: ProponenteModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProponenteService,
    private proponenteService: ProponenteService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
  }


  GetOptionsToSelects() {
    this.proponenteService.GetRecordList().subscribe(
      {
        next: (data: ProponenteModel[]) => {
          this.proponenteList = data;
          setTimeout(() => {
            InitSelectById("selDepartamento");
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
    model.telefono = this.GetForm['telefono'].value;
    model.fotografia = this.GetForm['fotografia'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) => {
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-departamento"]);
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
