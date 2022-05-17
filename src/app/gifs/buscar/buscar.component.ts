import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService){}

  buscar(){
    const valorTxt : string = this.txtBuscar.nativeElement.value;
    
    this.gifsService.buscarGifs(valorTxt)
    
    this.txtBuscar.nativeElement.value = '';
  }
}
