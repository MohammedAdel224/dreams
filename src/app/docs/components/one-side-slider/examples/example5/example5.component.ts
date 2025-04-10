import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../../util.service';
import { Example } from '../../../../../interfaces/example.interface';

@Component({
    selector: 'app-example5',
    imports: [],
    templateUrl: './example5.component.html',
    styleUrl: './example5.component.css'
})
export class Example5Component implements OnInit, Example{
    private css = '';

    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/example5.css').subscribe({
            next: (response)=>{
                this.css = response;
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }

    get HTML(){
        return '';
    }

    get CSS(){
        return this.css;
    }

    get HighlightedCSS(){
        return this.css;
    }
}
