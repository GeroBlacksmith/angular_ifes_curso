import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListaEquiposComponent } from './equipos/lista-equipos/lista-equipos.component';
import { ModeloPadreComponent } from './modelo/modelo-padre.component';
import { Monhan4uComponent } from './monhan4u/monhan4u.component';
import { MonhangenComponent } from './monhangen/monhangen.component';
import { MainComponent } from './main/main.component';
import { PadreComponent } from './padre/padre.component';
import { GetPadreComponent } from './set-get/get-padre.component';
import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { PruebaReactivos } from './reactivos/prueba-reactivos.component';
import { EquipoComponent } from './equipos/equipo.component';
import {ListaJugadoresComponent}from'./jugador/lista-jugadores.component';
export const routes: Routes = [

    {
        path: "reactivos",
        component: PruebaReactivos
    },
    {
        path: "getpadre",
        component: GetPadreComponent
    },
    {
        path: "",
        component: GetPadreComponent
    },
    {
        path: "padre",
        component: PadreComponent
    },
    {
        path: "modeloPadre",
        component: ModeloPadreComponent
    },
    {
        path:"equipo",
        component:EquipoComponent
    },
    {
        path:"jugadores",
        component:ListaJugadoresComponent
    }



    // { path: 'jugadores', component: ListaJugadoresComponent },
    //   { path: 'equipos', component: ListaEquiposComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);