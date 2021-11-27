import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/models/parametros/departamento.model';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { DepartamentoService } from 'src/app/services/parametros/departamento.service';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {

  facultadList : FacultadModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DepartamentoService,
    private facultadService: FacultadService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
    console.log(this.facultadList);
    
  }


  GetOptionsToSelects() {
    this.facultadService.GetRecordList().subscribe(
      {
        next: (data: FacultadModel[]) => {
          this.facultadList = data;
          console.log(this.facultadList);
          
          setTimeout(() => {
            InitSelectById("selFacultad");
          }, 100);
        }
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      idFacultad: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new DepartamentoModel();
    model.nombre = this.GetForm['nombre'].value;
    model.idFacultad = parseInt(this.GetForm['idFacultad'].value);
    this.service.SaveRecord(model).subscribe({
      next: (data: DepartamentoModel) =>{
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
