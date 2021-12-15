import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEvaluacionesComponent } from './listar-evaluaciones/listar-evaluaciones.component';

const routes: Routes = [
  {
    path: "listar-evaluaciones",
    component: ListarEvaluacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluarRoutingModule { }
