import { Component, OnInit } from '@angular/core';
import { BrandNameComponent } from '../../../brand-name/brand-name.component';
import { UtilService } from '../../../util.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-introduction',
    imports: [BrandNameComponent],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.css'
})
export class IntroductionComponent implements OnInit{
    initIndexHTML: string = '';
    includeCSSAndJs: string = '';

    constructor(
        private util: UtilService,
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
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
