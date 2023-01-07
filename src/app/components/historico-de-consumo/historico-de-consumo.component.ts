import { FormHistorico } from './form-historico';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-historico-de-consumo',
  templateUrl: './historico-de-consumo.component.html',
  styleUrls: ['./historico-de-consumo.component.css']
})
export class HistoricoDeConsumoComponent implements OnInit {
  historico: FormGroup
  @Output() fornecimento:number=0
  @Output() consumoMedioAnual:number=0
  consumoPorMes:any=[0,0,0,0,0,0,0,0,0,0,0,0];

  defineFornecimento(){
    console.log(parseInt('defineFornecimento return: ' + this.historico.value.fornecimento))
    this.fornecimento = parseInt(this.historico.value.fornecimento)
  }
  calculaMedia(){
    var soma = 0;
    var contador = 0;
    if(this.historico.value.jan != null){
      soma = soma + this.historico.value.jan;
      contador += 1;
      this.consumoPorMes[0] = this.historico.value.jan
      console.log('soma: '+soma)
    }
    if(this.historico.value.fev != null){
      soma = soma + this.historico.value.fev;
      contador += 1;
      this.consumoPorMes[1] = this.historico.value.fev
    }
    if(this.historico.value.mar != null){
      soma = soma + this.historico.value.mar;
      contador += 1;
      this.consumoPorMes[2] = this.historico.value.mar
    }
    if(this.historico.value.abr != null){
      soma = soma + this.historico.value.abr;
      contador += 1;
      this.consumoPorMes[3] = this.historico.value.abr
    }
    if(this.historico.value.mai != null){
      soma = soma + this.historico.value.mai;
      contador += 1;
      this.consumoPorMes[4] = this.historico.value.mai
    }
    if(this.historico.value.jun != null){
      soma = soma + this.historico.value.jun;
      contador += 1;
      this.consumoPorMes[5] = this.historico.value.jun
    }
    if(this.historico.value.jul != null){
      soma = soma + this.historico.value.jul;
      contador += 1;
      this.consumoPorMes[6] = this.historico.value.jul
    }
    if(this.historico.value.ago != null){
      soma = soma + this.historico.value.ago;
      contador += 1;
      this.consumoPorMes[7] = this.historico.value.ago
    }
    if(this.historico.value.set != null){
      soma = soma + this.historico.value.set;
      contador += 1;
      this.consumoPorMes[8] = this.historico.value.set
    }
    if(this.historico.value.out != null){
      soma = soma + this.historico.value.out;
      contador += 1;
      this.consumoPorMes[9] = this.historico.value.out
    }
    if(this.historico.value.nov != null){
      soma = soma + this.historico.value.nov;
      contador += 1;
      this.consumoPorMes[10] = this.historico.value.nov
    }
    if(this.historico.value.dez != null){
      soma = soma + this.historico.value.dez;
      contador += 1;
      this.consumoPorMes[11] = this.historico.value.dez
    }
    this.consumoMedioAnual =parseFloat((soma/contador).toFixed(2))
    console.log('media: '+this.consumoMedioAnual)
  }
  criaHistorico(formHistorico: FormHistorico){
  this.historico = new FormGroup({
    fornecimento: new FormControl(formHistorico.fornecimento),
    jan: new FormControl(formHistorico.jan),
    fev: new FormControl(formHistorico.fev),
    mar: new FormControl(formHistorico.mar),
    abr: new FormControl(formHistorico.abr),
    mai: new FormControl(formHistorico.mai),
    jun: new FormControl(formHistorico.jun),
    jul: new FormControl(formHistorico.jul),
    ago: new FormControl(formHistorico.ago),
    set: new FormControl(formHistorico.set),
    out: new FormControl(formHistorico.out),
    nov: new FormControl(formHistorico.nov),
    dez: new FormControl(formHistorico.dez),
  })
  }

  ngOnInit() {
    this.criaHistorico(new FormHistorico())
  }
}

