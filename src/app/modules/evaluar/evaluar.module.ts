import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluarRoutingModule } from './evaluar-routing.module';
import { ListarEvaluacionesComponent } from './listar-evaluaciones/listar-evaluaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EvaluarTrabajoComponent } from './evaluar-trabajo/evaluar-trabajo.component';


@NgModule({
  declarations: [
    ListarEvaluacionesComponent,
    EvaluarTrabajoComponent
  ],
  imports: [
    CommonModule,
    EvaluarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EvaluarModule { }
