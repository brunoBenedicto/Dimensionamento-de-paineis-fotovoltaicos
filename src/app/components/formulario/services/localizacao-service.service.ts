import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {
  constructor(private http: HttpClient) { }

  consultarCEP(cep: number){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${cep}|country:BR&key=AIzaSyAyk3pPRorgn0YQMQUcCTWlVtt3N1hLWIA`
    return this.http.get<any>(url)
  }

  consultarPorEndereco(endereco:string){
    endereco = endereco.replace(/ /gi, "+")
    console.log(endereco)
    const url = `https://irradiacao-brasil.brunobenedicto.repl.co/coordenadas?endereco=${endereco}`
    console.log(this.http.get<any>(url))
    return this.http.get<any>(url)
  }

}
