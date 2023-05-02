import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/carousel', pathMatch: 'full' },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'navegador', component: NavegadorComponent },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
