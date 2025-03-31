import { Component } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { BrandNameComponent } from '../../brand-name/brand-name.component';

declare const bootstrap: any; // Declare bootstrap globally

@Component({
    selector: 'app-sidebar',
    imports: [RouterModule, BrandNameComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    const offcanvasInstance = bootstrap.Offcanvas.getInstance(sidebar);
                    offcanvasInstance?.hide();
                }
            }
        });
    }
}
