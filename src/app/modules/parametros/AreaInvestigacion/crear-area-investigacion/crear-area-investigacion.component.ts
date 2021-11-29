import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { AreaInvestigacionModel } from 'src/app/models/parametros/area-investigacion.model';
import { AreaInvestigacionService } from 'src/app/services/parametros/area-investigacion.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-area-investigacion',
  templateUrl: './crear-area-investigacion.component.html',
  styleUrls: ['./crear-area-investigacion.component.css']
})
export class CrearAreaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AreaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]]
    });
  }

  SaveRecord() {
    let model = new AreaInvestigacionModel();
    model.id = this.GetForm['id'].value;
    model.nombre = this.GetForm['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: AreaInvestigacionModel) => {
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
