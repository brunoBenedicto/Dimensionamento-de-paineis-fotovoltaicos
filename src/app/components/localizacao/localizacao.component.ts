import { LocalizacaoService } from './localizacao.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  @Output() latitude:number=0
  @Output() longitude:number=0
  endereco:string
  constructor(private localizacaoService: LocalizacaoService) { }

  ngOnInit(): void {
  }

  resultadoBusca:any
  consultarCEP(cep:string){
    this.resultadoBusca = this.localizacaoService.consultarCEP(parseInt(cep)).subscribe(res =>{
      this.resultadoBusca = res;
      this.resultadoBusca.results[0].geometry = res.results[0].geometry
      this.resultadoBusca.status = res.status
      this.latitude = this.resultadoBusca.results[0].geometry.location.lat
      this.longitude = this.resultadoBusca.results[0].geometry.location.lng
      this.endereco = this.resultadoBusca.results[0].formatted_address
    })
  }
}
