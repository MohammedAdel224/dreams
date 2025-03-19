import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrandNameComponent } from '../../brand-name/brand-name.component';

@Component({
    selector: 'app-sidebar',
    imports: [RouterModule, BrandNameComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
