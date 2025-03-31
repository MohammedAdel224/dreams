import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../util.service';
import { CodeComponent } from "../../../../code/code.component";

@Component({
    selector: 'app-customize-shape',
    imports: [CodeComponent],
    templateUrl: './customize-shape.component.html',
    styleUrl: './customize-shape.component.css'
})
export class CustomizeShapeComponent implements OnInit{
innerHTML = '';
    cssCode = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider-custom-shape.css').subscribe({
            next: (response)=>{
                this.cssCode = response;
                this.innerHTML = this.util.highlightCssColors(response);
                console.log(this.cssCode)
                console.log(this.innerHTML)
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
