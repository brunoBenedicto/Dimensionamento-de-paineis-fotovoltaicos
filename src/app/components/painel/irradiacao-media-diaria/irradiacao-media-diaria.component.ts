import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-irradiacao-media-diaria',
  templateUrl: './irradiacao-media-diaria.component.html',
  styleUrls: ['./irradiacao-media-diaria.component.css']
})
export class IrradiacaoMediaDiariaComponent implements OnInit {
  @Input() dadosIrradiacao: any;
  @Input() minimo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
