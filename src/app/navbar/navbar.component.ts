import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    currentPath: string = '';

    constructor(private router: Router, public util: UtilService) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentPath = event.urlAfterRedirects; // Update on route change
            }
        });
    }
}
