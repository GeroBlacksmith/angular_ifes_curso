import {Injectable}from'@angular/core';
import {Observable}from'rxjs/Observable';
import {of}from'rxjs/observable/of';
import 'rxjs/add/operator/delay';
 

import{Equipos,ListaEquipos}from'../equipos/modelo-dato/Equipos';

 
@Injectable()
export class EquipoService {
 
  delayMs = 500;

  getEquipos(): Observable<Equipos[]> {
    return of(ListaEquipos).delay(this.delayMs); // simula delay
  }  
}
