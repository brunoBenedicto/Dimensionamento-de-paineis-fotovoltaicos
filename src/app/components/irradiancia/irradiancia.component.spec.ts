import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrradianciaComponent } from './irradiancia.component';

describe('IrradianciaComponent', () => {
  let component: IrradianciaComponent;
  let fixture: ComponentFixture<IrradianciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrradianciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrradianciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
