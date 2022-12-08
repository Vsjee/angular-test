import { TestBed } from '@angular/core/testing';

import { GetCoffeeService } from './get-coffee.service';

describe('GetCoffeeService', () => {
  let service: GetCoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
