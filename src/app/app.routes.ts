import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'docs', component: DocsComponent}
];
