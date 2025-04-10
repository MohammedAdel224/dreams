import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../../util.service';
import { Example } from '../../../../../interfaces/example.interface';

@Component({
    selector: 'app-example4',
    imports: [],
    templateUrl: './example4.component.html',
    styleUrl: './example4.component.css'
})
export class Example4Component implements OnInit, Example{
    private css = '';
    private highlightedCss = '';

    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/example4.css').subscribe({
            next: (response)=>{
                this.css = response;
                this.highlightedCss = this.util.highlightCssColors(response);
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
        return this.highlightedCss;
    }
}
