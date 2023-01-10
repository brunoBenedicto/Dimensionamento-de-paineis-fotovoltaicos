import { IrradiacaoService } from './services/irradiacao.service';
import { LocalizacaoService } from './services/localizacao-service.service';
import { ModeloDeFormulario } from './model/modelo-de-formulario';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  localizacao:any;
  @Output() resultadoIrradiacao:any;
  @Output() minimo: number;
  @Output() quantidadeDePaineis: number
  @Output() consumoMedioAnual: number;
  @Output() consumoMedioMensal: number;
  @Output() consumoMedioDiario: number;
  @Output() logradouro: string;
  @Output() latitude: number;
  @Output() longitude: number;

  constructor(private localizacaoService: LocalizacaoService, private irradiacao: IrradiacaoService) { }

  criarFormulario(modeloDeFormulario: ModeloDeFormulario){
    this.formulario = new FormGroup({
      endereco: new FormControl(modeloDeFormulario.endereco),
      fornecimento: new FormControl(modeloDeFormulario.fornecimento),
      consumo: new FormControl(modeloDeFormulario.consumo),
      potencia: new FormControl(modeloDeFormulario.potencia)
    })
  }
  ngOnInit(): void {
    this.criarFormulario(new ModeloDeFormulario())
  }
  consultarCEP(cep:number){
    this.localizacao = this.localizacaoService.consultarCEP(cep).subscribe(res =>{
      this.localizacao = res;
      this.localizacao.results[0].geometry = res.results[0].geometry
      this.localizacao.status = res.status
      this.latitude = this.localizacao.results[0].geometry.location.lat
      this.longitude = this.localizacao.results[0].geometry.location.lng
      this.logradouro = this.localizacao.results[0].formatted_address
      this.consultarIrradicacao(this.localizacao.results[0].geometry.location.lat, this.localizacao.results[0].geometry.location.lng)
    })
  }
  consultarPorEndereco(endereco:string){
    console.log('aqui')
    this.localizacao = this.localizacaoService.consultarPorEndereco(endereco).subscribe(res =>{
      console.log('res')
      console.log(res);
      this.localizacao = res;
      this.localizacao.results[0].geometry = res.results[0].geometry
      this.localizacao.status = res.status
      this.latitude = this.localizacao.results[0].geometry.location.lat
      this.longitude = this.localizacao.results[0].geometry.location.lng
      this.logradouro = this.localizacao.results[0].formatted_address
      this.consultarIrradicacao(this.localizacao.results[0].geometry.location.lat, this.localizacao.results[0].geometry.location.lng)
    })
    console.log('local')
    console.log(this.localizacao)
  }

  preencheConsumo(){
    this.consumoMedioAnual = this.formulario.value.consumo;
    this.consumoMedioMensal = this.formulario.value.consumo - this.formulario.value.fornecimento
    this.consumoMedioDiario = parseFloat(((this.formulario.value.consumo - this.formulario.value.fornecimento)/30).toFixed(2))
  }
  consultarIrradicacao(lat:number, lon:number){
    console.log("consutando com ts:" +lat);
    this.resultadoIrradiacao = this.irradiacao.consultarIrradiacao(lat, lon).subscribe(res =>{
    this.resultadoIrradiacao = res;
    this.resultadoIrradiacao.ID =res.ID;
    this.resultadoIrradiacao.COUNTRY =res.COUNTRY;
    this.resultadoIrradiacao.LON =res.LON;
    this.resultadoIrradiacao.LAT =res.LAT;
    this.resultadoIrradiacao.ANNUAL =res.ANNUAL;
    this.resultadoIrradiacao.JAN =res.JAN;
    this.resultadoIrradiacao.FEB =res.FEB;
    this.resultadoIrradiacao.MAR =res.MAR;
    this.resultadoIrradiacao.APR =res.APR;
    this.resultadoIrradiacao.MAY =res.MAY;
    this.resultadoIrradiacao.JUN =res.JUN;
    this.resultadoIrradiacao.JUL =res.JUL;
    this.resultadoIrradiacao.AUG =res.AUG;
    this.resultadoIrradiacao.SEP =res.SEP;
    this.resultadoIrradiacao.OCT =res.OCT;
    this.resultadoIrradiacao.NOV =res.NOV;
    this.resultadoIrradiacao.DEC =res.DEC;
    this.minimo =Math.min( res.JAN, res.FEB, res.MAR, res.APR, res.MAY, res.JUN, res.JUL, res.AUG, res.SEP, res.OCT, res.NOV, res.DEC);
    this.definePaineis(Math.min( res.JAN, res.FEB, res.MAR, res.APR, res.MAY, res.JUN, res.JUL, res.AUG, res.SEP, res.OCT, res.NOV, res.DEC))
    })
  }

  definePaineis(minimo:number ){
    this.quantidadeDePaineis = Math.ceil((((this.consumoMedioDiario)/(minimo/1000))*1000)/this.formulario.value.potencia);
  }
  submeter(){
    this.preencheConsumo();
    console.log('submeter :' +this.formulario.value.endereco)
    this.consultarPorEndereco(this.formulario.value.endereco);
  }




}
