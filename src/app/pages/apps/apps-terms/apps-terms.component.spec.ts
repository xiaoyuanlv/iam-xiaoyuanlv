import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsTermsComponent } from './apps-terms.component';

describe('AppsTermsComponent', () => {
  let component: AppsTermsComponent;
  let fixture: ComponentFixture<AppsTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
