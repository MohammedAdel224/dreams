import { Component } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { CustomizeColorsComponent } from './customize-colors/customize-colors.component';
import { CustomizeShapeComponent } from './customize-shape/customize-shape.component';

@Component({
  selector: 'app-sliders',
  imports: [ CreateSliderComponent, CustomizeColorsComponent, CustomizeShapeComponent],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css'
})
export class SlidersComponent {

}
