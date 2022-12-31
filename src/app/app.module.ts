import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoDeConsumoComponent } from './components/historico-de-consumo/historico-de-consumo.component';
import { PainelConsumoMedioComponent } from './components/painel-consumo-medio/painel-consumo-medio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficoComponent } from './components/painel-consumo-medio/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoricoDeConsumoComponent,
    PainelConsumoMedioComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
