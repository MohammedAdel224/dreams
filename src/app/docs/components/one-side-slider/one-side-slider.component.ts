import { Component } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BrandNameComponent } from "../../../brand-name/brand-name.component";
import { ExamplesComponent } from "./examples/examples.component";

@Component({
    selector: 'app-one-side-slider',
    imports: [
        CreateSliderComponent,
        DefaultStyleComponent,
        BrandNameComponent,
        ExamplesComponent
    ],
    templateUrl: './one-side-slider.component.html',
    styleUrl: './one-side-slider.component.css'
    })
export class OneSideSlider {

}
