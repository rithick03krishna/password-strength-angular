import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordentryComponent } from './passwordentry.component';

describe('PasswordentryComponent', () => {
  let component: PasswordentryComponent;
  let fixture: ComponentFixture<PasswordentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordentryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
