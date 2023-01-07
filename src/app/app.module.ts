import { IrradiacaoService } from './components/irradiancia/irradiacao.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoDeConsumoComponent } from './components/historico-de-consumo/historico-de-consumo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { LocalizacaoService } from './components/localizacao/localizacao.service';
import { IrradianciaComponent } from './components/irradiancia/irradiancia.component';
import { ConsumoMedioComponent } from './components/painel/consumo-medio/consumo-medio.component';
import { IrradiacaoMediaDiariaComponent } from './components/painel/irradiacao-media-diaria/irradiacao-media-diaria.component';
import { LocalidadeComponent } from './components/painel/localidade/localidade.component';
import { QuantidadeDePaineisComponent } from './components/painel/quantidade-de-paineis/quantidade-de-paineis.component';
import { FormularioComponent } from './components/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoricoDeConsumoComponent,
    LocalizacaoComponent,
    IrradianciaComponent,
    ConsumoMedioComponent,
    IrradiacaoMediaDiariaComponent,
    LocalidadeComponent,
    QuantidadeDePaineisComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    LocalizacaoService,
    IrradiacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
