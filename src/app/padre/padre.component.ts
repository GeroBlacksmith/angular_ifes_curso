import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent{
  
  constructor() { }
  saludoPadre: string;
  saludar(nombre: string){
    this.saludoPadre = nombre;
  }
  saludaAlPadre(saludo:string){
    alert(saludo)
  }
}
