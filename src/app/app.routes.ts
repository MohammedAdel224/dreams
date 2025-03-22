import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { SlidersComponent } from './docs/components/sliders/sliders.component';
import { DownloadComponent } from './docs/get-started/download/download.component';
import { IntroductionComponent } from './docs/get-started/introduction/introduction.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'docs',
        component: DocsComponent,
        children:[
            { path: 'get-started/introduction', component: IntroductionComponent },
            { path: 'components/sliders', component: SlidersComponent },
            { path: 'get-started/download', component: DownloadComponent},
            { path: '', redirectTo: 'get-started/introduction', pathMatch: 'full'}
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
