import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumo-medio',
  templateUrl: './consumo-medio.component.html',
  styleUrls: ['./consumo-medio.component.css']
})
export class ConsumoMedioComponent implements OnInit {

  @Input() consumoMedioAnual: any;
  @Input() consumoMedioMensal: any;
  @Input() consumoMedioDiario: any;
  constructor() { }

  ngOnInit(): void {
  }

}
