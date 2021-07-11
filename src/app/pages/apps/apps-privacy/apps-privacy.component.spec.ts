import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsPrivacyComponent } from './apps-privacy.component';

describe('AppsPrivacyComponent', () => {
  let component: AppsPrivacyComponent;
  let fixture: ComponentFixture<AppsPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
