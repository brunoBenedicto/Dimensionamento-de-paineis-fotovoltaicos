import { IrradiacaoService } from './components/formulario/services/irradiacao.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalizacaoService } from './components/formulario/services/localizacao-service.service';
import { ConsumoMedioComponent } from './components/painel/consumo-medio/consumo-medio.component';
import { IrradiacaoMediaDiariaComponent } from './components/painel/irradiacao-media-diaria/irradiacao-media-diaria.component';
import { LocalidadeComponent } from './components/painel/localidade/localidade.component';
import { QuantidadeDePaineisComponent } from './components/painel/quantidade-de-paineis/quantidade-de-paineis.component';
import { FormularioComponent } from './components/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
