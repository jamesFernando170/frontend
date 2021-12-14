import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { invitacionEvaluarModel } from 'src/app/models/invitacionEvaluar/invitacionEvaluar.model';
import { JuradoModel } from 'src/app/models/parametros/jurado.model';
import { JuradoService } from 'src/app/services/parametros/jurado.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-vincular-jurado',
  templateUrl: './vincular-jurado.component.html',
  styleUrls: ['./vincular-jurado.component.css']
})
export class VincularJuradoComponent implements OnInit {

  listaJurados: JuradoModel[] = []; // atributos para usar en el html, en la parte de listas desplegables
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private juradoService: JuradoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects(); //trae la información de los selec
  }

  GetOptionsToSelects() {
    //obtención de la lista
    this.juradoService.GetRecordList().subscribe(
      {
        next: (data: JuradoModel[]) => {
          this.listaJurados = data;
          setTimeout(() => {
            InitSelectById("selJurado");
          }, 100);

        }
      }
    )
  }

  CreateForm() {
    this.form = this.fb.group({
      jurados: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      estadoInvitacion: ["", [Validators.required]],
      fechaRespuesta: ["", [Validators.required]],
      fechaInvitacion:  ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let Idjurados = this.GetForm['jurados'].value;
    console.log(this.GetForm['jurados'].value);
    let id = parseInt(this.route.snapshot.params["id"]);
    let estadoInvitacion = this.GetForm['estadoInvitacion'].value;
    let descripcion = this.GetForm['descripcion'].value;
    let fechaRespuesta = this.GetForm['fechaRespuesta'].value;
    let fechaInvitacion = this.GetForm['fechaInvitacion'].value;
    console.log(Idjurados);
    let ie = new invitacionEvaluarModel();

    /* for (let i = 0; i < Idjurados.length; i++) {      
      this.service.obtenerJurado(Idjurados[i]).subscribe({
        next: (data: JuradoModel) => {
          ie.jurado = data
        }
      })
    } */

    this.service.asociarJuradoSolicitud(id, Idjurados, descripcion, fechaRespuesta,fechaInvitacion, estadoInvitacion
      ).subscribe({
      next: () => {
        console.log("Sirvio Perri");
        this.router.navigate(["/solicitud/listar-solicitud"]);
      }
    })

  }

  get GetForm() {
    return this.form.controls;
  }


}
