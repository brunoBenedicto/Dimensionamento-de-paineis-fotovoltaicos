import { TestBed } from '@angular/core/testing';

import { IrradiacaoService } from './irradiacao.service';

describe('IrradiacaoService', () => {
  let service: IrradiacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrradiacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
