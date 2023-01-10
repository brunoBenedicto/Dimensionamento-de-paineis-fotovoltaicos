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
    endereco = endereco.replace(/ /gi, "%20")
    console.log(endereco)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${endereco}&key=AIzaSyAyk3pPRorgn0YQMQUcCTWlVtt3N1hLWIA`
    console.log(this.http.get<any>(url))
    return this.http.get<any>(url)
  }

}
