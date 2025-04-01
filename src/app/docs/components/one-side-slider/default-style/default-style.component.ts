import { Component, OnInit } from '@angular/core';
import { CodeComponent } from "../../../../code/code.component";
import { UtilService } from '../../../../util.service';

@Component({
  selector: 'app-default-style',
  imports: [CodeComponent],
  templateUrl: './default-style.component.html',
  styleUrl: './default-style.component.css'
})
export class DefaultStyleComponent implements OnInit {
    innerHTML = '';
    cssCode = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider-default-style.css').subscribe({
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
