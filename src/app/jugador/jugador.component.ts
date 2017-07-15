import {Component, OnInit}from '@angular/core';
import {Jugador}from './Jugador';
declare var $: any;
@Component({
selector:'app-jugador',
templateUrl:'./jugador.component.html'
})
export class JugadorComponent implements OnInit{

    player = new Jugador(1, "Rock", "Tres", 80900);

    equipos=[
        'Rojo',
        'Azul',
        'Verde'
    ];

    modelo:any={};
    submit:boolean=false;
    onSubmit(jugador:Jugador){
        debugger;
        this.modelo=jugador;
    }
    agregarJugador(jugador:Jugador){
        debugger;
        this.modelo=jugador;
    }
    ngOnInit(){
        $(document).ready(function(){
            $('select').material_select();
        })
    }
    log(){
        console.log("hola");
        console.log(this.modelo.equipo);
    }
    setEquipo(equipo:String){
        console.log("equipo: ",equipo)
        this.modelo.equipo=equipo;
    }

}