import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-hijo',
  templateUrl: './get-hijo.component.html'
})
export class GetHijoComponent {
  
  capital: string;
  @Input()
  set verCapital(pais: string) {
    switch (pais) {
      case pais = 'Argentina':
        this.capital = 'Buenos Aires';
        break;
      case pais = 'Japon':
        this.capital = 'Tokyo';
        break;
      case pais = 'Corea Del Sur':
        this.capital = 'Seul';
        break;
      default:
        this.capital = 'No reconoce pais';
        break;
    }

  }
  get verCapital(): string {
    return this.capital;
  }
}
