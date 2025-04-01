import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../util.service';
import { CodeComponent } from "../../../../code/code.component";

@Component({
    selector: 'app-customize-colors',
    imports: [CodeComponent],
    templateUrl: './customize-colors.component.html',
    styleUrl: './customize-colors.component.css'
})
export class CustomizeColorsComponent implements OnInit{
    innerHTML = '';
    cssCode = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider-custom-color.css').subscribe({
            next: (response)=>{
                this.cssCode = response;
                this.innerHTML = this.util.highlightCssColors(response);
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
