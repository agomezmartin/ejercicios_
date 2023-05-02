import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { JumbotronComponent } from './componentes/jumbotron/jumbotron.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FooterComponent,
    BlogComponent,
    JumbotronComponent,
    CarouselComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
/*    TranslateModule
  */  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
