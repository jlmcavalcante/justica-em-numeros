import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsDialogComponent } from './credits-dialog.component';

describe('CreditsDialogComponent', () => {
  let component: CreditsDialogComponent;
  let fixture: ComponentFixture<CreditsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
