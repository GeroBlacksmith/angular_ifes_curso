import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[miLoop]'
})
export class MiLoopDirective {

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    @Input() set miLoop(num: number) {
        for (var i = 0; i < num; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            
        }
    }
}