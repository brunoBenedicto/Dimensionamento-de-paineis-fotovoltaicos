import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-localidade',
  templateUrl: './localidade.component.html',
  styleUrls: ['./localidade.component.css']
})
export class LocalidadeComponent implements OnInit {

  @Input() dadosLocal: any;


  constructor() { }

  ngOnInit(): void {
    console.log("init"+this.dadosLocal)
  }


}
