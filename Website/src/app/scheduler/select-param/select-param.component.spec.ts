/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectParamComponent } from './select-param.component';

describe('SelectParamComponent', () => {
  let component: SelectParamComponent;
  let fixture: ComponentFixture<SelectParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
