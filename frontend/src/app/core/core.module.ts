import {LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MarvelApiserviceService } from './services/marvelapiservice.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    MarvelApiserviceService,
    httpInterceptorProviders
  ]
})
export class CoreModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
 }
