import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

// Input permite que el dato 'color' haga el enlace con la expresión dentro de la directiva
@Directive({
    selector: '[app-miDirectiva]'
})

export class MiDirective {

    // ElementRef se injecta en el constructor de la directiva para poder acceder al elemento del DOM
    // También injectamos el objeto Renderer para trabajar con los estilos del elemento del DOM
    constructor(private el: ElementRef, private render: Renderer) {
        // this.cambiarColor('red');
        this.el = el;
        this.render = render;
    }

    // El decorador @Input le dice a Angular que esta propiedad es pública y está disponible para ser "bindeada" por un componente padre.
    // Sin este decorador Angular no puede bindear la propiedad.
    // El @Input es necesario porque los componentes o directivas no deben mostrar sus propiedades a otros componentes, 
    // ya que estas son privadas por defecto.

    // Para darse si el @Input es necesario:
    // * Cuando en el template la propiedad aparece a la derecha del igual(=) significa que pertenece al componente del template
    // y no se necesita el decorador @Input.

    // * Cuando la propiedad aparece con ([ ]) a la izquierda del igual(=) la propiedad pertenece a otro componente o directiva
    // y debe ser adornada con el decorador @Input
    @Input() muestraColor: string;
    @Input() defaultColor: string;
    

    @HostListener('mouseenter') onMouseEnter() {
        this.verColor(this.muestraColor || this.defaultColor || 'red');
        this.addClass("pulse", this.el);

    }

    @HostListener('mouseleave') onMouseLeave() {
        this.verColor(null);
        
        this.removeClass("pulse", this.el);
    }

    private verColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;

    }




    removeClass(className: string, element: any) {
        this.render.setElementClass(element, className, false);
    }
    addClass(className: string, element: any) {
        this.render.setElementClass(element, className, true);
        // or use the host element directly
        // this._renderer.setElementClass(this._elementRef.nativeElement, className, true);
    }
}

// Pasos para crear una directiva

// 1- Importar los módulos requeridos: Directive, ElementRef, and Renderer del core Angular 2 
// 2- Crear una clase Typescript
// 3- Decorar la clase con el decorador @directive
// 4- Poner un valor a la propiedad selector 
// 5- En el constructor de la clase injectar los objetos ElementRef and Renderer.
// 6- Poner el selector en el elemento deseado del template HTML
// 7- Ageragr la directiva al módulo (app.module.ts) en declarations
