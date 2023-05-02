import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlantasService } from 'src/app/servicios/plantas.service';

  /* -----------------------------------
  |            DECORADOR               |
  ----------------------------------- */

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  /* -----------------------------------
  |            DATOS                   |
  ----------------------------------- */

  plantaNombre: string = "";
  plantaDescripcion: string = "";

  /* -----------------------------------
  |            FUNCIONES               |
  ----------------------------------- */
  public plantasDescripcion(){
    if(this.plantaNombre==="cocotero"){
      this.plantaDescripcion = "El cocotero es una palma que posee un tronco delgado, ya sea curvo o recto, a menudo ensanchado e inclinado en la base, se cultiva extensamente por su fruto y como árbol ornamental, se usa como una fuente de alimento, bebida, aceite, fibra, combustible, madera y numerosos productos.";
    } else if (this.plantaNombre === "sterlitzia"){
      this.plantaDescripcion = "La strelitzia, llamado popularmente ave del paraíso o flor del paraíso entre otros nombres, es un género con 5 especies reconocidas​ perteneciente a la familia Strelitziaceae. Es nativo de Sudáfrica.​ ";
    } else if (this.plantaNombre==="zamioculca"){
      this.plantaDescripcion = "Zamioculcas es un género monotípico de plantas con flores perteneciente a la familia Araceae. Su única especie, Zamioculcas zamiifolia Engl.. es una planta tropical nativa de África oriental, desde el sur de Kenia hasta el nordeste de Sudáfrica.";
    } else if (this.plantaNombre==="dracena"){
      this.plantaDescripcion = "Dracaena Vand. ex L. es un género de plantas espermatofitas de la clase de las monocotiledóneas que incluye especies desde árboles a hierbas rizomatosas/estoloníferas.";
    } else if (this.plantaNombre==="ficus"){
      this.plantaDescripcion = "El género Ficus contiene alrededor de 900 taxones específicos e infra-específicos aceptados de árboles, arbustos y trepadoras de la familia Moraceae, tribu monogenérica Ficeae, oriundas de la zona intertropical, con algunas de ellas distribuidas por las regiones templadas.";
    }
 }

  /* --------------------------------------------------------------------
  |            CONSTRUCTOR (formBuilder y receptor del servicio PLANTAS) |
  --------------------------------------------------------------------- */
  constructor() {}
  ngOnInit():void{}

  /* -----------------------------------
  |            onSubmit()              |
  ----------------------------------- */
  onSubmit(): void {
    alert('Thanks!');
  }


}
