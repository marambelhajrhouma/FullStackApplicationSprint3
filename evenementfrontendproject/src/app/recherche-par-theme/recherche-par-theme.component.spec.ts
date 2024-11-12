import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParThemeComponent } from './recherche-par-theme.component';

describe('RechercheParThemeComponent', () => {
  let component: RechercheParThemeComponent;
  let fixture: ComponentFixture<RechercheParThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
