import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'test';
  precio:number = 0;
  visible = 'hidden';

  calcularPrecio(bolso:string, talla:string){

    return this.precio;

  }


}
