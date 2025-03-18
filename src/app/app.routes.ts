import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SlidersComponent } from './sliders/sliders.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'docs',
        component: DocsComponent,
        children:[
            { path: 'get-started', component: GetStartedComponent },
            { path: 'components/sliders', component: SlidersComponent },
            { path: '', redirectTo: 'get-started', pathMatch: 'full'}
        ]
    }
];
