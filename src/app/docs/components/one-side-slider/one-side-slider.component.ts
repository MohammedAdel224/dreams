import { Component } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { CustomizeColorsComponent } from './customize-colors/customize-colors.component';
import { CustomizeShapeComponent } from './customize-shape/customize-shape.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { BrandNameComponent } from "../../../brand-name/brand-name.component";

@Component({
  selector: 'app-one-side-slider',
  imports: [
    CreateSliderComponent,
    CustomizeColorsComponent,
    CustomizeShapeComponent,
    DefaultStyleComponent,
    BrandNameComponent
],
  templateUrl: './one-side-slider.component.html',
  styleUrl: './one-side-slider.component.css'
})
export class OneSideSlider {

}
