import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-localidade',
  templateUrl: './localidade.component.html',
  styleUrls: ['./localidade.component.css']
})
export class LocalidadeComponent implements OnInit {

  @Input() logradouro: any
  @Input() latitude: any
  @Input() longitude: any

  constructor() { }

  ngOnInit(): void {
  }

}
