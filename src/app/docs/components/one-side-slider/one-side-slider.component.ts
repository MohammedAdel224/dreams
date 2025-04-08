import { Component } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BrandNameComponent } from "../../../brand-name/brand-name.component";
import { ExamplesComponent } from "./examples/examples.component";
import { CreateSliderWithTooltipComponent } from './create-slider-with-tooltip/create-slider-with-tooltip.component';

@Component({
    selector: 'app-one-side-slider',
    imports: [
        BrandNameComponent,
        CreateSliderComponent,
        ExamplesComponent,
        CreateSliderWithTooltipComponent,
        DefaultStyleComponent
    ],
    templateUrl: './one-side-slider.component.html',
    styleUrl: './one-side-slider.component.css'
    })
export class OneSideSlider {

}
