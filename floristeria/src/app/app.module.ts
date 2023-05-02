import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantaComponent } from './componentes/planta/planta.component';
import { FormularioContenedorComponent } from './componentes/formulario-contenedor/formulario-contenedor.component';
import { ContenedorComponent } from './componentes/contenedor/contenedor.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    FormularioComponent,
    PlantaComponent,
    FormularioContenedorComponent,
    ContenedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    RadioButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
