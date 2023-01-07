import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoMedioComponent } from './consumo-medio.component';

describe('ConsumoMedioComponent', () => {
  let component: ConsumoMedioComponent;
  let fixture: ComponentFixture<ConsumoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
