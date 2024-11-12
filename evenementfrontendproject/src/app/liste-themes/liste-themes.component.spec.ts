import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeThemesComponent } from './liste-themes.component';

describe('ListeThemesComponent', () => {
  let component: ListeThemesComponent;
  let fixture: ComponentFixture<ListeThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeThemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
