import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';

declare const openGeneralMessageModal: any;

@Component({
  selector: 'app-crear-jurado',
  templateUrl: './crear-jurado.component.html',
  styleUrls: ['./crear-jurado.component.css']
})
export class CrearJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]], 
      telefono: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      entidad: ["", [Validators.required]],
      fecha_nacimiento: ["", [Validators.required]],
      documento: ["", [Validators.required]],
    });
  }

  SaveRecord(){
    let model = new JuradoModel();
    model.nombre = this.GetForm['nombre'].value;
    model.apellidos = this.GetForm['apellidos'].value;
    model.telefono = this.GetForm['telefono'].value;
    model.correo = this.GetForm['correo'].value;
    model.entidad = this.GetForm['entidad'].value;
    model.fecha_nacimiento = this.GetForm['fecha_nacimiento'].value;
    model.documento = this.GetForm['documento'].value;
    this.service.SaveRecord(model).subscribe({
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
