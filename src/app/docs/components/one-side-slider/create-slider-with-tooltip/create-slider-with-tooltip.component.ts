import { Component } from '@angular/core';
import { UtilService } from '../../../../util.service';
import { CodeComponent } from '../../../../code/code.component';

@Component({
    selector: 'app-create-slider-with-tooltip',
    imports: [ CodeComponent ],
    templateUrl: './create-slider-with-tooltip.component.html',
    styleUrl: './create-slider-with-tooltip.component.css'
})
export class CreateSliderWithTooltipComponent {
    html = '';
    htmlCode = '';
    css = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider/one-side-slider-with-tooltip.html').subscribe({
            next: (response)=>{
                this.htmlCode = response;
                this.html = this.util.convertHTMLTextToHTML(response);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });

        this.util.readFile('assets/one-side-slider/one-side-slider-with-tooltip.css').subscribe({
            next: (response)=>{
                this.css = response;
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
