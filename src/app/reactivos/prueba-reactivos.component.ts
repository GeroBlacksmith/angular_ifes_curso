import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component}from'@angular/core';
@Component({
    selector:"app-prueba-reactivos",
    templateUrl:"prueba-reactivos.component.html"
})
export class PruebaReactivos{
    miFormulario:FormGroup;

    curso: any;                     // A property for our submitted form
    nombreCurso: string;
    profesor: string;
    descripcion: string;

    constructor(private fb:FormBuilder){
        this.miFormulario=fb.group({
            'nombreCurso':['',Validators.required],
            'profesor':['',Validators.required],
            'descripcion':[null,Validators.compose([Validators.required, Validators.minLength(5)])]
        })
    }
    agregarCurso(curso) {
        this.nombreCurso = curso.nombreCurso;
        this.profesor = curso.profesor;
        this.descripcion = curso.descripcion;
    }
}