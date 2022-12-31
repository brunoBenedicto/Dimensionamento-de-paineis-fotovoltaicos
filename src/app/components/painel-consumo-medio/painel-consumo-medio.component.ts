import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-consumo-medio',
  templateUrl: './painel-consumo-medio.component.html',
  styleUrls: ['./painel-consumo-medio.component.css']
})
export class PainelConsumoMedioComponent implements OnInit {

  constructor() { }
  @Input() fornecimento:any
  @Input() media:any
  @Input() consumoPorMes:any=[];
  ngOnInit(): void {
  }

}
