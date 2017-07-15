//FRAMEWORK
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//ROUTING
import { routing } from './app-routing';

//COMPONENTS
import { AppComponent } from './app.component';
import {EquipoComponent}from'./equipos/equipo.component'
import {EquipoDetalleComponent}from'./equipos/equipo-detalle.component'
import { Monhan4uComponent } from './monhan4u/monhan4u.component';
import { MonhangenComponent } from './monhangen/monhangen.component';
import { MainComponent } from './main/main.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { GetPadreComponent } from './set-get/get-padre.component';
import { GetHijoComponent } from './set-get/get-hijo.component';
import { ModeloPadreComponent } from './modelo/modelo-padre.component';
import { ModeloHijoComponent } from './modelo/modelo-hijo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { AppDetalleJugador } from './jugador/detalle-jugador.component';
import { PruebaReactivos } from './reactivos/prueba-reactivos.component';
import{EquipoService}from'./services/equipo.service';
import{FormularioComponent}from'./formulario/formulario.component';
import {JugadoresService}from './services/lista-jugadores.service';
import{ListaJugadoresComponent}from'./jugador/lista-jugadores.component'
//DIRECTIVES
//import { MiDirective } from './directive/mi-directiva.directive';
//import { HighlightDirective } from './directive/highlight.directive';
//import {MiLoopDirective} from './directive/estructura.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PruebaReactivos,
    GetHijoComponent,
    GetPadreComponent,
    HijoComponent,
    PadreComponent,
    ModeloPadreComponent,
    ModeloHijoComponent,
    EquipoComponent,
    EquipoDetalleComponent,
    FormularioComponent,
    ListaJugadoresComponent
    //MiDirective,
    //MiLoopDirective,
    //HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [EquipoService, JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }