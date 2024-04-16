import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavorisComponent } from './pokemon-favoris.component';

describe('PokemonFavorisComponent', () => {
  let component: PokemonFavorisComponent;
  let fixture: ComponentFixture<PokemonFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFavorisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
