import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeSvgComponent } from './globe-svg.component';

describe('GlobeSvgComponent', () => {
  let component: GlobeSvgComponent;
  let fixture: ComponentFixture<GlobeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobeSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
