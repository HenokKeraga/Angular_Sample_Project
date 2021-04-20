import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDialogComponent } from './donor-dialog.component';

describe('DonorDialogComponent', () => {
  let component: DonorDialogComponent;
  let fixture: ComponentFixture<DonorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
