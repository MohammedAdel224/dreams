import { Component } from '@angular/core';
import { CreateSliderComponent } from './create-slider/create-slider.component';
import { CustomizeColorsComponent } from './customize-colors/customize-colors.component';
import { CustomizeShapeComponent } from './customize-shape/customize-shape.component';
import { DefaultStyleComponent } from './default-style/default-style.component';

@Component({
  selector: 'app-sliders',
  imports: [
    CreateSliderComponent,
    CustomizeColorsComponent,
    CustomizeShapeComponent,
    DefaultStyleComponent],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css'
})
export class SlidersComponent {

}
