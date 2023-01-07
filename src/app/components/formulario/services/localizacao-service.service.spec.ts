import { TestBed } from '@angular/core/testing';

import { LocalizacaoServiceService } from './localizacao-service.service';

describe('LocalizacaoServiceService', () => {
  let service: LocalizacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
