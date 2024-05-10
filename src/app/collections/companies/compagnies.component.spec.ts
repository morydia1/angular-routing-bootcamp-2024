import { ComponentFixture, TestBed } from '@angular/core/testing';

import { companiesComponent } from './companies.component';

describe('companiesComponent', () => {
  let component: companiesComponent;
  let fixture: ComponentFixture<companiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [companiesComponent]
    });
    fixture = TestBed.createComponent(companiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
