import { Component} from '@angular/core';

@Component({
  selector: 'app-monhangen',
  templateUrl: './monhangen.component.html',
  styleUrls: ['./monhangen.component.css']
})
export class MonhangenComponent {
  logoMHG = "../../assets/MH_X_logo.png";
  
  constructor() { }
  
  lista:string;
  listMHG: string;
  newMonster(){
    this.lista="Monster 2";
  }

}
