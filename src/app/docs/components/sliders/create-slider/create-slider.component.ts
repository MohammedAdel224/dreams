import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../util.service';
import { CodeComponent } from '../../../../code/code.component';

@Component({
    selector: 'app-create-slider',
    imports: [ CodeComponent ],
    templateUrl: './create-slider.component.html',
    styleUrl: './create-slider.component.css'
})
export class CreateSliderComponent implements OnInit {
    oneSideSlider = '';

    constructor(public util: UtilService){}

    ngOnInit(): void {
        this.util.readFile('assets/one-side-slider.html').subscribe({
            next: (response)=>{
                this.oneSideSlider = response;
            },
            error: (error)=>{
                console.log('Error reading file: ', error);
            }
        });
    }
}
