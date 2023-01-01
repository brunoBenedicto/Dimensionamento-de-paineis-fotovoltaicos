import { LocalizacaoService } from './localizacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  resultadoBusca:any
  latitude:number
  longitude:number
  endereco:string
  constructor(private localizacaoService: LocalizacaoService) { }

  ngOnInit(): void {
  }

  consultar(cep:string){
    this.resultadoBusca = this.localizacaoService.consultar(parseInt(cep)).subscribe(res =>{
      this.resultadoBusca = res;
      this.resultadoBusca.results[0].geometry = res.results[0].geometry
      this.resultadoBusca.status = res.status
      this.latitude = this.resultadoBusca.results[0].geometry.location.lat
      this.longitude = this.resultadoBusca.results[0].geometry.location.lng
      this.endereco = this.resultadoBusca.results[0].formatted_address
      console.log(res)
      console.log('latitude: '+ this.latitude)
      console.log('longitude: '+ this.longitude)
    })
  }
}
