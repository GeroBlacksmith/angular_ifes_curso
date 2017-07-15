import {Component}from'@angular/core';
import {JugadoresService}from'../services/lista-jugadores.service';
@Component({
    selector:'app-formulario',
    templateUrl:'formulario.component.html'
})
export class FormularioComponent{
    constructor(private jugadores:JugadoresService){

    }
    onSubmit(modelo:any){
        this.jugadores.saveJugadores(modelo).subscribe(
            jugadores=>{
                this.jugadores=modelo;
            }
        )
    }   
}