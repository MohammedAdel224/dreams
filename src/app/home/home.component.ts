import { Component } from '@angular/core';
import { UtilService } from '../util.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [ RouterModule ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(public util: UtilService){}
}
