import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeDePaineisComponent } from './quantidade-de-paineis.component';

describe('QuantidadeDePaineisComponent', () => {
  let component: QuantidadeDePaineisComponent;
  let fixture: ComponentFixture<QuantidadeDePaineisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantidadeDePaineisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantidadeDePaineisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
