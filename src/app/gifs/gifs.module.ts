import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuscarComponent,
    ResultadoComponent
  ],
  exports : [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
