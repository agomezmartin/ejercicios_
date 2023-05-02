import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendorComponent } from './contendor.component';

describe('ContendorComponent', () => {
  let component: ContendorComponent;
  let fixture: ComponentFixture<ContendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
