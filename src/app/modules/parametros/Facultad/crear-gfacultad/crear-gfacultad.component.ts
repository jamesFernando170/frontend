import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';
import { FacultadService } from 'src/app/services/parametros/facultad.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-gfacultad',
  templateUrl: './crear-gfacultad.component.html',
  styleUrls: ['./crear-gfacultad.component.css']
})
export class CrearGfacultadComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: FacultadService
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

  SaveRecord(){
    let model = new FacultadModel();
    model.id = this.GetForm['id'].value;
    model.nombre = this.GetForm['nombre'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: FacultadModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-facultad"]);
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
