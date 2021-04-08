import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeListComponent } from './apprentice-list.component';

describe('ApprenticeListComponent', () => {
  let component: ApprenticeListComponent;
  let fixture: ComponentFixture<ApprenticeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenticeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
