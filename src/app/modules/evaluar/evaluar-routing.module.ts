import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluarTrabajoComponent } from './evaluar-trabajo/evaluar-trabajo.component';
import { ListarEvaluacionesComponent } from './listar-evaluaciones/listar-evaluaciones.component';

const routes: Routes = [
  {
    path: "listar-evaluaciones",
    component: ListarEvaluacionesComponent
  },
  {
    path: "evaluar-trabajo/:id",
    component: EvaluarTrabajoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluarRoutingModule { }
