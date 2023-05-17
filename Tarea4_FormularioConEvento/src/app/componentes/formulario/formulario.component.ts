import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./../estiloComponentes.css']
})
export class FormularioComponent {

  precio:number = 0;
  visible="none";

  calcularPrecios(bolso:string, talla:string){

/*    switch (true) {
      case bolso='Dalia' || bolso='azalea' || bolso='margarita':
        if(talla=="pequeño"){
          this.precio=10;
        }
        break;
    
      default:
        break;
    }
    
    this.visible="visible";
    return this.precio, this.visible;
*/
  }

}
