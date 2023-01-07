import { IrradiacaoService } from './irradiacao.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-irradiancia',
  templateUrl: './irradiancia.component.html',
  styleUrls: ['./irradiancia.component.css']
})
export class IrradianciaComponent implements OnInit {
  quantidadeDePaineis:number;
  @Input() latitude: any;
  @Input() longitude: any;

  constructor(private irradiacao: IrradiacaoService) { }
  ngOnInit(): void {
  }

  resultadoIrradiacao:any;
  minimo:number;
 consultarIrradicacao(lat:number, lon:number, potencia){
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
    this.resultadoIrradiacao.MIN =Math.min( res.JAN, res.FEB, res.MAR, res.APR, res.MAY, res.JUN, res.JUL, res.AUG, res.SEP, res.OCT, res.NOV, res.DEC
      )})
      this.minimo = this.resultadoIrradiacao.MIN
      this.quantidadeDePaineis = this.minimo/potencia.value
      console.log(this.minimo)
      console.log(this.quantidadeDePaineis)
      console.log(this.resultadoIrradiacao.MIN)
  }

}
