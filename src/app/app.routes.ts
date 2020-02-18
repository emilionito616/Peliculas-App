import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: 'search/:texto', component: SearchComponent },
    { path: 'pelicula/:id/:pag', component: PeliculaComponent},
   /*  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent}, */
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);