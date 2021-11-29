import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProponenteModel } from 'src/app/models/parametros/proponente.model';
import { ProponenteService } from 'src/app/services/parametros/proponente.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';

declare const openGeneralMessageModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-vincular-proponente',
  templateUrl: './vincular-proponente.component.html',
  styleUrls: ['./vincular-proponente.component.css']
})
export class VincularProponenteComponent implements OnInit {

  listaProponentes: ProponenteModel[] = []; // atributos para usar en el html, en la parte de listas desplegables
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SolicitudService,
    private proponenteService: ProponenteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.GetOptionsToSelects(); //trae la información de los selec
  }

  GetOptionsToSelects() {
    //obtención de la lista
    this.proponenteService.GetRecordList().subscribe(
      {
        next: (data: ProponenteModel[]) => {
          this.listaProponentes = data;
          setTimeout(() => {
            InitSelectById("selProponente");
          }, 100);

        }
      }
    )
  }

  CreateForm() {
    this.form = this.fb.group({
      proponentes: ["", [Validators.required]],
    });
  }

  SaveRecord() {
    let IdProponentes = this.GetForm['selProponente'].value;
    let id = parseInt(this.route.snapshot.params["id"]);

    this.service.asociarProponeteSolicitud(id, IdProponentes).subscribe({
      next: () => {
        console.log("Sirvio Perri");
        
      }
    })

  }

  get GetForm() {
    return this.form.controls;
  }



}