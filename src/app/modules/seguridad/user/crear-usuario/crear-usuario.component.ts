import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/usuario/rol.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { roleservice } from 'src/app/services/usuarios/rol.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  rolList : RolModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuarioService,
    private rolService: roleservice
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
    console.log(this.rolList);
    
  }


  GetOptionsToSelects() {
    this.rolService.GetRecordList().subscribe(
      {
        next: (data: RolModel[]) => {
          this.rolList = data;
          console.log(this.rolList);
          
          setTimeout(() => {
            InitSelectById("selRol");
          }, 100);
        }
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fecha_nacimiento: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      idRoles: ["", [Validators.required]]
    });
  }

  SaveRecord(){
    let model = new UsuarioModel();
    model.nombre = this.GetForm['nombre'].value;
    model.apellidos = this.GetForm['apellidos'].value;
    model.documento = this.GetForm['documento'].value;
    model.fecha_nacimiento = this.GetForm['fecha_nacimiento'].value;
    model.celular = this.GetForm['celular'].value;
    model.correo = this.GetForm['correo'].value;
    //model.nombre = this.GetForm['idRoles'].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: UsuarioModel) =>{
        openGeneralMessageModal(generalData.SAVED_MESSAGE);
        this.router.navigate(["/seguridad/listar-usuario"]);
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

