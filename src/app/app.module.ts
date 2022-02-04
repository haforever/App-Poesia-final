import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuadroInfoComponent } from './cuadro-info/cuadro-info.component';
import { AcordionComponent } from './acordion/acordion.component';
import { EmergentesComponent } from './emergentes/emergentes.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuadroInfoComponent,
    AcordionComponent,
    EmergentesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
