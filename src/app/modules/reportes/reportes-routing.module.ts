import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
import { DepartamentoXproponenteComponent } from './departamento-xproponente/departamento-xproponente.component';
import { JuradoXareaInvestigacionComponent } from './jurado-xarea-investigacion/jurado-xarea-investigacion.component';

const routes: Routes = [
  {
    path: "departamento-xproponente",
    component: DepartamentoXproponenteComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "jurado-xarea-investigacion",
    component: JuradoXareaInvestigacionComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
