import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./../estiloComponentes.css']
})
export class FormularioComponent {

//  visible="none";
precio?:number;
divisa?:string;
bolso?:string[];
tallas?:string[] = [
  "Elige talla...",
  "talla" : [
    "pequeño": "Pequeño",
    "mediano": "Mediano",
    "grande": "Grande",
  ],
];


  calcularPrecios(bolso:string[], tallas:string[]):any{

//    let bolso = document.getElementById("talla").value;
//    let talla = document.getElementsByName("bolso")

    switch (true) {

      case bolso=='Dalia' || bolso=='Azalea' || bolso=='Margarita':

      if(tallas=="pequeno"){
          this.precio=10;
        } else if(tallas=="mediano") {
          this.precio=20;
        } else if(tallas=="grande"){
          this.precio=40;
        }
        break;

        case bolso=='Gitamilla' || bolso=='Crisantemo' || bolso=='Margarita':
          if(tallas=="pequeno"){
            this.precio=15;
          } else if(tallas=="mediano") {
            this.precio=25;
          } else if(tallas=="grande"){
            this.precio=45;
          }
          break;

      default:
        break;
    }

//    this.visible="visible";
    this.currency = "€";
    return this.precio + this.currency;

  }

}
