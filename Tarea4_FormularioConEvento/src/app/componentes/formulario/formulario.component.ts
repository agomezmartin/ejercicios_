import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./../estiloComponentes.css']
})
export class FormularioComponent {

//  visible="none";
  precio:number = 0;

  calcularPrecios(bolso:string, talla:string):any{

    switch (true) {

      case bolso=='Dalia' || bolso=='Azalea' || bolso=='Margarita':
        if(talla=="pequeño"){
          this.precio=10;
        } else if(talla=="mediano") {
          this.precio=20;
        } else if(talla=="grande"){
          this.precio=40;
        }
        break;

        case bolso=='Gitamilla' || bolso=='Crisantemo' || bolso=='Margarita':
          if(talla=="pequeño"){
            this.precio=15;
          } else if(talla=="mediano") {
            this.precio=25;
          } else if(talla=="grande"){
            this.precio=45;
          }
          break;

      default:
        break;
    }

//    this.visible="visible";
    return this.precio;

  }

}
