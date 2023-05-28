import { LocalizacaoService } from './services/localizacao-service.service';
import { ModeloDeFormulario,  } from './model/modelo-de-formulario';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  @Output() model_Irradiacao: any;
  @Output() minimo: number;
  @Output() quantidadeDePaineis: number
  @Output() consumoMedioAnual: number;
  @Output() consumoMedioMensal: number;
  @Output() consumoMedioDiario: number;


  constructor(private localizacaoService: LocalizacaoService) { }

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

  consultarPorEndereco(endereco:string){
    console.log("consultarPorEndereco()");
    console.log(this.model_Irradiacao)
    this.localizacaoService.consultarPorEndereco(endereco).subscribe(res =>{
    this.model_Irradiacao = res;
    this.model_Irradiacao.ID =res.ID;
    this.model_Irradiacao.COUNTRY =res.COUNTRY;
    this.model_Irradiacao.LON =res.LON;
    this.model_Irradiacao.LAT =res.LAT;
    this.model_Irradiacao.ANNUAL =res.ANNUAL;
    this.model_Irradiacao.JAN =res.JAN;
    this.model_Irradiacao.FEB =res.FEB;
    this.model_Irradiacao.MAR =res.MAR;
    this.model_Irradiacao.APR =res.APR;
    this.model_Irradiacao.MAY =res.MAY;
    this.model_Irradiacao.JUN =res.JUN;
    this.model_Irradiacao.JUL =res.JUL;
    this.model_Irradiacao.AUG =res.AUG;
    this.model_Irradiacao.SEP =res.SEP;
    this.model_Irradiacao.OCT =res.OCT;
    this.model_Irradiacao.NOV =res.NOV;
    this.model_Irradiacao.DEC =res.DEC;
    this.minimo =Math.min( res.JAN, res.FEB, res.MAR, res.APR, res.MAY, res.JUN, res.JUL, res.AUG, res.SEP, res.OCT, res.NOV, res.DEC);
    this.definePaineis(Math.min( res.JAN, res.FEB, res.MAR, res.APR, res.MAY, res.JUN, res.JUL, res.AUG, res.SEP, res.OCT, res.NOV, res.DEC));
    console.log(this.model_Irradiacao);
    console.log("fim consultarPorEndereco()")
    })

  }

  preencheConsumo(){
    this.consumoMedioAnual = this.formulario.value.consumo;
    this.consumoMedioMensal = this.formulario.value.consumo - this.formulario.value.fornecimento
    this.consumoMedioDiario = parseFloat(((this.formulario.value.consumo - this.formulario.value.fornecimento)/30).toFixed(2))
  }

  definePaineis(minimo:number ){
    console.log("definePaineis()")
    this.quantidadeDePaineis = Math.ceil((((this.consumoMedioDiario)/(minimo/1000))*1000)/this.formulario.value.potencia);
  }
  submeter(){
    const endereco = this.formulario.value.endereco
    this.preencheConsumo();
    console.log('submeter :' + endereco)
    this.consultarPorEndereco(endereco);
    console.log("model_Irradiacao: "+this.model_Irradiacao)
  }




}
