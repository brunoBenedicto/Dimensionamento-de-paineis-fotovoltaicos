import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {
  constructor(private http: HttpClient) { }

  consultar(cep:number){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${cep}&key=AIzaSyAyk3pPRorgn0YQMQUcCTWlVtt3N1hLWIA`
    return this.http.get<any>(url)
  }

}
