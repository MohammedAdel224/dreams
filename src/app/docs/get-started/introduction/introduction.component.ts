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
    initIndexHTMLCode = '';
    includeCSSAndJs = '';
    includeCSSAndJsCode = '';

    constructor(
        public util: UtilService,
    ){}

    ngOnInit(): void {
        this.util.readFile('assets/init-index-html.html').subscribe({
            next: (response)=>{
                this.initIndexHTMLCode = response;
                this.initIndexHTML = this.util.convertHTMLTextToHTML(response);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });

        this.util.readFile('assets/include-css-and-js.html').subscribe({
            next: (response)=>{
                response = response.replace('cdn-css-url', this.util.cdn.css);
                response = response.replace("cdn-js-url", this.util.cdn.js);
                this.includeCSSAndJsCode = response;
                this.includeCSSAndJs = this.util.convertHTMLTextToHTML(response);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
