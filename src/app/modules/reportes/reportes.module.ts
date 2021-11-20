import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { JuradoXareaInvestigacionComponent } from './jurado-xarea-investigacion/jurado-xarea-investigacion.component';
import { DepartamentoXproponenteComponent } from './departamento-xproponente/departamento-xproponente.component';


@NgModule({
  declarations: [
    JuradoXareaInvestigacionComponent,
    DepartamentoXproponenteComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
