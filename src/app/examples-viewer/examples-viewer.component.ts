import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CodeComponent } from '../code/code.component';
import { Example } from '../interfaces/example.interface';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from '../example/example.component';

    @Component({
    selector: 'app-examples-viewer',
    imports: [ CodeComponent, CommonModule, ExampleComponent ],
    templateUrl: './examples-viewer.component.html',
    styleUrl: './examples-viewer.component.css'
})
export class ExamplesViewerComponent implements AfterViewInit {
    @Input() id: string = '';
    @Input() cols: number = 1;
    @Input() rows: number = 1;
    @Input() examples: Type<Example>[] = [];
    @ViewChild('showContainer', { read: ViewContainerRef }) showContainer!: ViewContainerRef;
    chunkedExamples: Type<Example>[][][] = [];
    selectedExample!: Example;
    start:boolean = false;

    constructor(private changeDetectorRef: ChangeDetectorRef){}

    ngAfterViewInit(): void {
        this.chunkExamples();
        this.initPageNumber();
        this.showContainer.clear();
        const componentRef: ComponentRef<Example> = this.showContainer.createComponent(this.examples[0]);
        setTimeout(() => {
            this.selectedExample = componentRef.instance;
            this.start = true;
            this.changeDetectorRef.detectChanges();
        });
    }

    private chunkExamples(){
        for(let i = 0; i < this.examples.length; i += this.cols*this.rows){
            const rows = this.examples.slice(i, i + this.cols*this.rows);
            var chunkedRows: Type<Example>[][] = [];
            for(let j = 0; j < rows.length; j += this.cols){
                chunkedRows.push(rows.slice(j, j + this.cols));
            }
            this.chunkedExamples.push(chunkedRows);
        }
    }

    numberOfPages: number = 0;
    currentPageNumber = 0;
    private initPageNumber(){
        this.numberOfPages = Math.ceil(this.examples.length/(this.rows*this.cols));
        this.currentPageNumber = 1;
    }

    nextPageNumber(){
        this.currentPageNumber = this.currentPageNumber % this.numberOfPages + 1;
    }

    prevoiusPageNumber(){
        this.currentPageNumber = (this.currentPageNumber - this.numberOfPages - 2) % this.numberOfPages + 1;
    }

    showExample(example: Example){
        setTimeout(() => {
            this.selectedExample = example;
        });
    }
}
