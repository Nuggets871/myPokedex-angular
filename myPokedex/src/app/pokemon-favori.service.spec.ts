import { TestBed } from '@angular/core/testing';

import { PokemonFavoriService } from './pokemon-favori.service';

describe('PokemonFavoriService', () => {
  let service: PokemonFavoriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonFavoriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
