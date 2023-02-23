import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrradiacaoService {
  constructor(private http: HttpClient){}
  consultarIrradiacao(lat:number, lon:number){
    console.log("consutando com serv:" +lat)
    const url = `https://irradiacao-brasil.brunobenedicto.repl.co/coordenadas?LON=${lon}&LAT=${lat}`
    return this.http.get<any>(url)
  }

}
