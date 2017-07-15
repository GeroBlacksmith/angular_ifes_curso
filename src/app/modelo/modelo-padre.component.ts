import { Component } from '@angular/core';
@Component({
    selector: 'app-modelo-padre',
    templateUrl: 'modelo-padre.component.html'
})
export class ModeloPadreComponent {
    modelo: any = { };
    verDatos(datos:any) {
        alert(datos.nombre);

    }
}