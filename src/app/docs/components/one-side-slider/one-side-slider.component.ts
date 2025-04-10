import { Component, OnInit, Type } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BrandNameComponent } from "../../../brand-name/brand-name.component";
import { CreateSliderWithTooltipComponent } from './create-slider-with-tooltip/create-slider-with-tooltip.component';
import { ExamplesViewerComponent } from "../../../examples-viewer/examples-viewer.component";
import { Example } from '../../../interfaces/example.interface';
import { Example1Component } from './examples/example1/example1.component';
import { Example2Component } from './examples/example2/example2.component';
import { Example3Component } from './examples/example3/example3.component';
import { Example4Component } from './examples/example4/example4.component';
import { Example5Component } from './examples/example5/example5.component';

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
    tooltipExamples: Type<Example>[] = [];

    ngOnInit(): void {
        this.sliderExamples = [Example1Component, Example2Component];
        this.tooltipExamples = [Example3Component, Example4Component, Example5Component]
    }
}
