import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent {

  constructor() { }
  @Input() list:string;
  
}
