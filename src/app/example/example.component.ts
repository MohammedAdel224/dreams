import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Example } from '../interfaces/example.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-example',
    imports: [ CommonModule ],
    templateUrl: './example.component.html',
    styleUrl: './example.component.css'
})
export class ExampleComponent implements AfterViewInit {
    @Input() example!: Type<Example>;
    @Input() showContainer!: ViewContainerRef;
    @Output() showNewExample = new EventEmitter<Example>();
    @ViewChild('exampleComponent', { read: ViewContainerRef }) exampleComponent!: ViewContainerRef;

    ngAfterViewInit(): void {
        if (this.example) {
            this.loadExample();
        }
    }

    private loadExample(): void {
        this.exampleComponent.clear();
        const componentRef: ComponentRef<Example> = this.exampleComponent.createComponent(this.example);
        componentRef.location.nativeElement.classList.add('w-100');
    }

    showExample(){
        this.showContainer.clear();
        const componentRef: ComponentRef<Example> = this.showContainer.createComponent(this.example);
        componentRef.location.nativeElement.classList.add('w-100');
        setTimeout(() => {
            this.showNewExample.emit(componentRef.instance);
        });
    }
}
