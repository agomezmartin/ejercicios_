import { Component } from '@angular/core';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent {

  tuPedido = "Tu pedido";
  planta = {
    nombre: "Cocotero",
    descripcion: "El cocotero es una palma que posee un tronco delgado, ya sea curvo o recto, a menudo ensanchado e inclinado en la base, se cultiva extensamente por su fruto y como árbol ornamental, se usa como una fuente de alimento, bebida, aceite, fibra, combustible, madera y numerosos productos."
  };

  plantaURL = "/assets/img/cocotero.jpg";
  altImg = "cocotero";




}
