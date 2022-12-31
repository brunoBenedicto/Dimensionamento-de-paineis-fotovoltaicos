import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeConsumoComponent } from './historico-de-consumo.component';

describe('HistoricoDeConsumoComponent', () => {
  let component: HistoricoDeConsumoComponent;
  let fixture: ComponentFixture<HistoricoDeConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoDeConsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoDeConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
