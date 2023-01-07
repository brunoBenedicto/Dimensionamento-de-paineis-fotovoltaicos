import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrradiacaoMediaDiariaComponent } from './irradiacao-media-diaria.component';

describe('IrradiacaoMediaDiariaComponent', () => {
  let component: IrradiacaoMediaDiariaComponent;
  let fixture: ComponentFixture<IrradiacaoMediaDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrradiacaoMediaDiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrradiacaoMediaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
