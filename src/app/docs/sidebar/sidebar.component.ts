import { Component } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { BrandNameComponent } from '../../brand-name/brand-name.component';
import { UtilService } from '../../util.service';

declare const bootstrap: any; // Declare bootstrap globally

@Component({
    selector: 'app-sidebar',
    imports: [RouterModule, BrandNameComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(private router: Router, public util: UtilService) {
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
