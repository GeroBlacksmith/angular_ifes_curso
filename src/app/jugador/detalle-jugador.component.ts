import {Component, Input} from '@angular/core';
import {Jugador} from './Jugador';
@Component({
    selector:'app-detalle-jugador',
    templateUrl:'detalle-jugador.component.html'
})
export class AppDetalleJugador{
   @Input() detalleJugador:Jugador;


}