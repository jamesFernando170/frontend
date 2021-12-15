import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-editar-jurado',
  templateUrl: './editar-jurado.component.html',
  styleUrls: ['./editar-jurado.component.css']
})
export class EditarJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.SearchRecord();
  }

  createForm() {
    this.form = this.fb.group({
      id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]], 
      telefono: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      entidad: ["", [Validators.required]],
      fecha_nacimiento: ["", [Validators.required]],
      documento: ["", [Validators.required]],
    });
  }

  SearchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) => {
        this.GetForm['id'].setValue(data.id);
        this.GetForm['nombre'].setValue(data.nombre);
        this.GetForm['apellidos'].setValue(data.apellidos);
        this.GetForm['telefono'].setValue(data.telefono);
        this.GetForm['correo'].setValue(data.correo);
        this.GetForm['entidad'].setValue(data.entidad);
        this.GetForm['fecha_nacimiento'].setValue(data.fecha_nacimiento);
        this.GetForm['documento'].setValue(data.documento);
      }
    });
  }

  SaveRecord(){
    let model = new JuradoModel();
    model.id = this.GetForm['id'].value;
    model.nombre = this.GetForm['nombre'].value;
    model.apellidos = this.GetForm['apellidos'].value;
    model.telefono = this.GetForm['telefono'].value;
    model.correo = this.GetForm['correo'].value;
    model.entidad = this.GetForm['entidad'].value;
    model.fecha_nacimiento = this.GetForm['fecha_nacimiento'].value;
    model.documento = this.GetForm['documento'].value;
    this.service.EditRecord(model).subscribe({
      next: (data: JuradoModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-jurado"]);
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
