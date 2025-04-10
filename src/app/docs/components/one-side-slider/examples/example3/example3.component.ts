import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../../util.service';
import { Example } from '../../../../../interfaces/example.interface';

@Component({
    selector: 'app-example3',
    imports: [],
    templateUrl: './example3.component.html',
    styleUrl: './example3.component.css'
})
export class Example3Component implements OnInit, Example{
    private css = '';

    constructor(private util: UtilService) {}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/example3.css').subscribe({
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
