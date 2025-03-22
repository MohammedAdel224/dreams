import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { GetStartedComponent } from './docs/get-started/get-started.component';
import { SlidersComponent } from './docs/components/sliders/sliders.component';
import { DownloadComponent } from './docs/get-started/download/download.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'docs',
        component: DocsComponent,
        children:[
            { path: 'get-started', component: GetStartedComponent },
            { path: 'components/sliders', component: SlidersComponent },
            { path: 'get-started/download', component: DownloadComponent},
            { path: '', redirectTo: 'get-started', pathMatch: 'full'}
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
