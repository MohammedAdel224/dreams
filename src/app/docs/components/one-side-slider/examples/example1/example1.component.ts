import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilService } from '../../../../../util.service';
import { Example } from '../../../../../interfaces/example.interface';

@Component({
    selector: 'app-example1',
    imports: [],
    templateUrl: './example1.component.html',
    styleUrl: './example1.component.css'
})
export class Example1Component implements OnInit, Example{
    @ViewChild('example1', { static: true }) private html!: ElementRef<HTMLDivElement>;
    private css = '';
    private highlightedCss = '';

    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/example1.css').subscribe({
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
