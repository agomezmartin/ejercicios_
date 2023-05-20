import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CardComponent } from './componentes/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  {path:'formulario', component:FormularioComponent},
  {path:'card', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
