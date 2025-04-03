import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../../../../../util.service';
import { Example } from '../example.interface';

@Component({
    selector: 'app-example2',
    imports: [],
    templateUrl: './example2.component.html',
    styleUrl: './example2.component.css'
})
export class Example2Component implements OnInit, Example {
    @ViewChild('example2', { static: true }) private html!: ElementRef<HTMLDivElement>;
    private css = '';
    private highlightedCss = '';

    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/example2.css').subscribe({
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
        return this.html.nativeElement.outerHTML;
    }

    get CSS(){
        return this.css;
    }

    get HighlightedCSS(){
        return this.highlightedCss;
    }
}
