import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Example } from './example.interface';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from "./example2/example2.component";
import { CodeComponent } from "../../../../code/code.component";

@Component({
    selector: 'app-examples',
    imports: [Example1Component, CodeComponent, Example2Component],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.css'
})
export class ExamplesComponent implements AfterViewInit, OnInit {
    @ViewChild('showContainer', { read: ViewContainerRef }) showContainer!: ViewContainerRef;
    selectedExample!: Example;
    numberOfPages: number = 0;
    currentPageNumber = 0;

    examples = [
        {component: Example1Component},
        {component: Example2Component}
    ]

    ngOnInit(): void{
        this.numberOfPages = document.querySelectorAll('.carousel-item').length;
        this.currentPageNumber = 1;
    }

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

    nextPageNumber(){
        this.currentPageNumber = this.currentPageNumber % this.numberOfPages + 1;
    }

    prevoiusPageNumber(){
        this.currentPageNumber = (this.currentPageNumber - this.numberOfPages - 2) % this.numberOfPages + 1;
    }
}
