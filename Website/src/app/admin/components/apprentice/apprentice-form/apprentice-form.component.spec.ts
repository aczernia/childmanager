import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeFormComponent } from './apprentice-form.component';

describe('ApprenticeFormComponent', () => {
  let component: ApprenticeFormComponent;
  let fixture: ComponentFixture<ApprenticeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenticeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
