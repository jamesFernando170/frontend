import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalData } from 'src/app/config/general-data';
import { RolModel } from 'src/app/models/usuario/rol.model';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { roleservice } from 'src/app/services/usuarios/rol.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  rolList : RolModel[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UsuarioService,
    private rolService: roleservice,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.GetOptionsToSelects();
    this.SearchRecord();
  }

  GetOptionsToSelects() {
    this.rolService.GetRecordList().subscribe(
      {
        next: (data: RolModel[]) => {
          this.rolList = data;
          setTimeout(() => {
            InitSelectById("selRol");
          }, 100);
        }
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      __id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],
      documento: ["", [Validators.required]],
      fecha_nacimiento: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      idRoles: ["", [Validators.required]]
    });
  }

  SearchRecord(){
    let _id = this.route.snapshot.params["_id"];
    this.service.SearchRecord(_id).subscribe({
      next: (data: UsuarioModel) => {
        this.GetForm['_id'].setValue(data._id);
        this.GetForm['nombre'].setValue(data.nombre);
        this.GetForm['apellidos'].setValue(data.apellidos);
        this.GetForm['documento'].setValue(data.documento);
        this.GetForm['fecha_nacimiento'].setValue(data.fecha_nacimiento);
        this.GetForm['celular'].setValue(data.celular);
        this.GetForm['correo'].setValue(data.correo);
      }
    });
  }

  SaveRecord(){
    let model = new UsuarioModel();
    model._id = this.GetForm['_id'].value;
    model.nombre = this.GetForm['nombre'].value;
    model.apellidos = this.GetForm['apellidos'].value;
    model.documento = this.GetForm['documento'].value;
    model.fecha_nacimiento = this.GetForm['fecha_nacimiento'].value;
    model.celular = this.GetForm['celular'].value;
    model.correo = this.GetForm['correo'].value;
    model.idRoles = this.GetForm["idRoles"].value
    this.service.EditRecord(model).subscribe({
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
