import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoDeConsumoComponent } from './components/historico-de-consumo/historico-de-consumo.component';
import { PainelConsumoMedioComponent } from './components/painel-consumo-medio/painel-consumo-medio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficoComponent } from './components/painel-consumo-medio/grafico/grafico.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { LocalizacaoService } from './components/localizacao/localizacao.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoricoDeConsumoComponent,
    PainelConsumoMedioComponent,
    GraficoComponent,
    LocalizacaoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    LocalizacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
