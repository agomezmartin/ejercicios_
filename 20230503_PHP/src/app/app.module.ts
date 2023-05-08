import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { SiginComponent } from './componentes/sigin/sigin.component';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TablaComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    RippleModule,
    ButtonModule,
    NgModule,
    FormsModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
