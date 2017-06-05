import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent{
  
  constructor() { }
  @Input() saludoHijo: string;
 
  @Output() vaHijo: EventEmitter<string> = new EventEmitter<string>();
  
  verPadre(){
     this.vaHijo.emit('Hola padre');
  }
}
