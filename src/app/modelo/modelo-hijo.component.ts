import {Component, Input}from'@angular/core';
@Component({
    selector:'app-modelo-hijo',
    templateUrl:'modelo-hijo.component.html'
})
export class ModeloHijoComponent{
    @Input() modeloHijo: any={};
}