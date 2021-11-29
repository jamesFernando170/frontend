import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-editar-area-investigacion',
  templateUrl: './editar-area-investigacion.component.html',
  styleUrls: ['./editar-area-investigacion.component.css']
})
export class EditarAreaInvestigacionComponent implements OnInit {

  areaInvestigacionList : AreaInvestigacionModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaInvestigacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.SearchRecord();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: AreaInvestigacionModel) => {
        this.GetForm['id'].setValue(data.id);
        this.GetForm['nombre'].setValue(data.nombre);
      }
    });
  }

  SaveRecord(){
    let model = new AreaInvestigacionModel();
    model.nombre = this.GetForm['nombre'].value;
    this.service.EditRecord(model).subscribe({
      next: (data: AreaInvestigacionModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-area-investigacion"]);
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
