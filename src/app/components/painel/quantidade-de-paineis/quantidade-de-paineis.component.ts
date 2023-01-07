import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quantidade-de-paineis',
  templateUrl: './quantidade-de-paineis.component.html',
  styleUrls: ['./quantidade-de-paineis.component.css']
})
export class QuantidadeDePaineisComponent implements OnInit {
  @Input() quantidadeDePaineis: any
  constructor() { }

  ngOnInit(): void {
  }

}
