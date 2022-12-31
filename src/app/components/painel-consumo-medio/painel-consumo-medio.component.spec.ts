import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelConsumoMedioComponent } from './painel-consumo-medio.component';

describe('PainelConsumoMedioComponent', () => {
  let component: PainelConsumoMedioComponent;
  let fixture: ComponentFixture<PainelConsumoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelConsumoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelConsumoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
