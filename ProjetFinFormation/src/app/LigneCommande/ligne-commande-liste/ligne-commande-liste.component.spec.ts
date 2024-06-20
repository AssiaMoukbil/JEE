import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneCommandeListeComponent } from './ligne-commande-liste.component';

describe('LigneCommandeListeComponent', () => {
  let component: LigneCommandeListeComponent;
  let fixture: ComponentFixture<LigneCommandeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneCommandeListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LigneCommandeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
