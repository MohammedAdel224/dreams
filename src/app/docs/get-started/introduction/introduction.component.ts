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

    constructor(
        private util: UtilService,
    ){}

    ngOnInit(): void {
        this.util.readFile('assets/init-index-html.html').subscribe({
            next: (response)=>{
                this.initIndexHTML = response;
                console.log(this.initIndexHTML);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
