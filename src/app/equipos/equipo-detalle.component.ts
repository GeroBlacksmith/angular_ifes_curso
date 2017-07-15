import {Component, Input, OnChanges} from '@angular/core';
import {ListaEquipos,Equipos} from './modelo-dato/Equipos';
import {Jugadores}from'./modelo-dato/Jugadores';
import {FormControl, FormGroup, FormBuilder, Validators}from'@angular/forms';
@Component({
    selector:'app-equipo-detalle',
    templateUrl:'equipo-detalle.component.html'
})
export class EquipoDetalleComponent{
   formEquipo:FormGroup;
   @Input() equipoDetalle:Equipos;
   constructor(private fb:FormBuilder){
       this.crearFormulario();
   }
   crearFormulario() {

    this.formEquipo = this.fb.group({
      nombre: ['', Validators.required],
      ciudad: ['', Validators.required],
      jugadores: this.fb.group({
        nombre: [''],
        apellido: ['']
      })

    })
  }
  ngOnChange(){
      this.formEquipo.setValue({
            nombre: this.equipoDetalle.nombre,
            ciudad: this.equipoDetalle.ciudad,
            jugadores: this.equipoDetalle.jugadores[0] || new Jugadores()           
        });
  }

}