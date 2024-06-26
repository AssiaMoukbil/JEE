import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListeComponent } from './client-liste.component';

describe('ClientListeComponent', () => {
  let component: ClientListeComponent;
  let fixture: ComponentFixture<ClientListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
