import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoMenuComponent } from './testando-menu.component';

describe('TestandoMenuComponent', () => {
  let component: TestandoMenuComponent;
  let fixture: ComponentFixture<TestandoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestandoMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestandoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
