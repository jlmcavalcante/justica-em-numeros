import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularMenu3Component } from './circular-menu-3.component';

describe('CircularMenu3Component', () => {
  let component: CircularMenu3Component;
  let fixture: ComponentFixture<CircularMenu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularMenu3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularMenu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
