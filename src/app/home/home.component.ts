import { Component } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(public util: UtilService){}
}
