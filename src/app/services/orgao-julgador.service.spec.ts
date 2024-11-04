import { TestBed } from '@angular/core/testing';

import { OrgaoJulgadorService } from './orgao-julgador.service';

describe('OrgaoJulgadorService', () => {
  let service: OrgaoJulgadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgaoJulgadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
