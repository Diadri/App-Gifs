import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsServices : GifsService){}

  get Historial(){
    return this.gifsServices.history
  }

  public buscar( parametroBusqueda : string) : void{
    this.gifsServices.buscarGifs(parametroBusqueda)
  }

}
