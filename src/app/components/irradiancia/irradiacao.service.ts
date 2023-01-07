import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrradiacaoService {
  constructor(private http: HttpClient){}
  consultarIrradiacao(lat:number, lon:number){
    const url = `http://localhost:3000/coordenadas?LON=${lon}&LAT=${lat}`
    return this.http.get<any>(url)
  }

}
