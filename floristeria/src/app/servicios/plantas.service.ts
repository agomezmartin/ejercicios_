import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Planta {
  nombre: string;
  url: string;
}

const PLANTAS: Planta[] = [

  { nombre:'Cocotero', url: '/./assets/img/cocotero.jpg'},
  { nombre:'Sterlitzia', url: '/./assets/img/sterlitzia.jpeg'},
  { nombre:'Zamioculca', url: '/./assets/img/zamioculca.jpg'},
  { nombre:'Dracena', url: '/./assets/img/dracena.png'},
  { nombre:'Ficus Moclame', url: '/./assets/img/ficusMoclame.png'}
]

@Injectable({
  providedIn: 'root'
})

export class PlantasService {

  constructor() { }

  getPlantas():Observable<Planta[]>{
    const plantas = of(PLANTAS);
    return plantas;
  }
}
