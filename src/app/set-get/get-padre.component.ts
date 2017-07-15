import { Component } from '@angular/core';

@Component({
  selector: 'app-get-padre',
  templateUrl: './get-padre.component.html'
})
export class GetPadreComponent {

  pais: string;

  
  verCapital(pais: string){
    this.pais = pais;
    
  }
}
