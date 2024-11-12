import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { evenementGuard } from './evenement.guard';

describe('evenementGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => evenementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
