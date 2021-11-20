import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoXproponenteComponent } from './departamento-xproponente/departamento-xproponente.component';
import { JuradoXareaInvestigacionComponent } from './jurado-xarea-investigacion/jurado-xarea-investigacion.component';

const routes: Routes = [
  {
    path: "departamento-xproponente",
    component: DepartamentoXproponenteComponent
  },
  {
    path: "jurado-xarea-investigacion",
    component: JuradoXareaInvestigacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
