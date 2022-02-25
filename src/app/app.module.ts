import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppointementsModule } from './modules/appointements/appointements.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { ClientsModule } from './modules/clients/clients.module';
import { MedicinesModule } from './modules/medicines/medicines.module';
import { PharmaciesModule } from './modules/pharmacies/pharmacies.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { SharedModule } from './modules/shared/shared.module';

import {InputTextModule} from 'primeng-lts/inputtext';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    
    AppointementsModule,
    ArticlesModule,
    ClientsModule,
    MedicinesModule,
    PharmaciesModule,
    QuestionsModule,
    SharedModule,

    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
