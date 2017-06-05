import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//import { ListaEquiposComponent } from './equipos/lista-equipos/lista-equipos.component';
import { Monhan4uComponent } from './monhan4u/monhan4u.component';
import {MonhangenComponent} from './monhangen/monhangen.component';
import {MainComponent} from './main/main.component';
import {PadreComponent} from './padre/padre.component';
import {AppComponent} from './app.component';

export const routes: Routes=[
    {
        path:'monhan4u',
        component: Monhan4uComponent
    },
    {
        path:'monhangen',
        component: MonhangenComponent
    },
    {
        path:'',
        component: MainComponent
    },
    {
        path:'padre',
        component:PadreComponent
    }
    
// { path: 'jugadores', component: ListaJugadoresComponent },
//   { path: 'equipos', component: ListaEquiposComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);