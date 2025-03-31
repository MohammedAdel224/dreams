import { Component, OnInit } from '@angular/core';
import { BrandNameComponent } from '../../../brand-name/brand-name.component';
import { UtilService } from '../../../util.service';
import { CodeComponent } from '../../../code/code.component';

@Component({
    selector: 'app-introduction',
    imports: [BrandNameComponent, CodeComponent],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.css'
})
export class IntroductionComponent implements OnInit{
    initIndexHTML = '';
    includeCSSAndJs = '';

    constructor(
        public util: UtilService,
    ){}

    ngOnInit(): void {
        this.util.readFile('assets/init-index-html.html').subscribe({
            next: (response)=>{
                this.initIndexHTML = response;
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });

        this.util.readFile('assets/include-css-and-js.html').subscribe({
            next: (response)=>{
                this.includeCSSAndJs = response;
                this.includeCSSAndJs = this.includeCSSAndJs.replace('cdn-css-url', this.util.cdn.css);
                this.includeCSSAndJs = this.includeCSSAndJs.replace("cdn-js-url", this.util.cdn.js);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
