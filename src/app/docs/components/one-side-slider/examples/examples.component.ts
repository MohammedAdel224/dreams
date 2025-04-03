import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Example } from './example';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from "./example2/example2.component";
import { CodeComponent } from "../../../../code/code.component";

@Component({
    selector: 'app-examples',
    imports: [Example1Component, CodeComponent, Example2Component],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.css'
})
export class ExamplesComponent implements AfterViewInit {
    @ViewChild('showContainer', { read: ViewContainerRef }) showContainer!: ViewContainerRef;
    selectedExample!: Example;

    examples = [
        {component: Example1Component},
        {component: Example2Component}
    ]

    ngAfterViewInit(): void {
        this.showExample(this.examples[0]);
    }

    showExample(example: {component: any}){
        this.showContainer.clear();
        const componentRef: ComponentRef<Example> = this.showContainer.createComponent(example.component);

        setTimeout(() => {
            this.selectedExample = componentRef.instance;
        });
    }
}
