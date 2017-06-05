import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }  from './app-routing';
import { Monhan4uComponent } from './monhan4u/monhan4u.component';
import { MonhangenComponent } from './monhangen/monhangen.component';
import { MainComponent } from './main/main.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { MonsterListComponent } from './monster-list/monster-list.component';


@NgModule({
  declarations: [
    AppComponent,
    Monhan4uComponent,
    MonhangenComponent,
    MainComponent,
    PadreComponent,
    HijoComponent,
    MonsterListComponent
    
    
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }