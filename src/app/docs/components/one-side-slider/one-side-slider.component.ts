import { Component, OnInit, Type } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BrandNameComponent } from "../../../brand-name/brand-name.component";
import { CreateSliderWithTooltipComponent } from './create-slider-with-tooltip/create-slider-with-tooltip.component';
import { ExamplesViewerComponent } from "../../../examples-viewer/examples-viewer.component";
import { Example } from '../../../interfaces/example.interface';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';

@Component({
    selector: 'app-one-side-slider',
    imports: [
    BrandNameComponent,
    CreateSliderComponent,
    ExamplesViewerComponent,
    CreateSliderWithTooltipComponent,
    DefaultStyleComponent,
],
    templateUrl: './one-side-slider.component.html',
    styleUrl: './one-side-slider.component.css'
    })
export class OneSideSlider implements OnInit{
    sliderExamples: Type<Example>[] = [];

    ngOnInit(): void {
        this.sliderExamples = [Example1Component, Example2Component];
    }
}
