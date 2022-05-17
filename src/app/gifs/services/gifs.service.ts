import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchGifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKeyGifs : string = '2ICIDMDBkFoUPX6QKopcLCw42UeZGioy'
  private _history : string[] = [];
  private baseUrl : string = "https://api.giphy.com/v1/gifs"

  get history(){
    return [...this._history];
  }

  public resultados : Gifs[] = [];
  
  constructor(private http: HttpClient) {
    if(localStorage.getItem("historial") && localStorage.getItem("Gifs")){
      this._history = JSON.parse( localStorage.getItem("historial")!)
      this.resultados = JSON.parse( localStorage.getItem("Gifs")!)
    }
  }

  buscarGifs( query : string){
    if(query.trim().length !== 0){

      query = query.trim().toLowerCase()

      if(!this._history.includes( query )){
        this._history.unshift(query)
        this._history = this._history.splice(0,10)
        localStorage.setItem("historial", JSON.stringify(this._history))
      }
    }

    const paramsBuscar = new HttpParams()
    .set("api_key", this.apiKeyGifs)
    .set("q", query);


    this.http.get<SearchGifsResponse>(`${this.baseUrl}/search?${ paramsBuscar }` )
                  .subscribe(
                    (resp : SearchGifsResponse) =>{
                      console.log(resp);
                      this.resultados = resp.data;
                      localStorage.setItem("Gifs", JSON.stringify(this.resultados))
                  });
  }
}
