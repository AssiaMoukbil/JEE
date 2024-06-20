import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurListeComponent } from './fournisseur-liste.component';

describe('FournisseurListeComponent', () => {
  let component: FournisseurListeComponent;
  let fixture: ComponentFixture<FournisseurListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournisseurListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FournisseurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
