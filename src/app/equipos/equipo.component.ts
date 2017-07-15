import {Component, Input, OnInit} from '@angular/core';
import { Equipos} from './modelo-dato/Equipos';
import{EquipoService}from'../services/equipo.service';
@Component({
    selector:'app-equipo',
    templateUrl:'equipo.component.html'
})
export class EquipoComponent{
    equipo:Equipos;
    equipos:any;
    equipoSeleccionado:Equipos;
    
    seleccionarEquipo(equipo:Equipos){
        this.equipoSeleccionado=equipo;
        
    }
    ngOnInit(){
        this.listaEquipos();
    }
    listaEquipos(){
        this.equipoService.getEquipos().subscribe(
            equipos=>{this.equipos=equipos;}
        )
    }
    constructor(private equipoService:EquipoService){

    }
}