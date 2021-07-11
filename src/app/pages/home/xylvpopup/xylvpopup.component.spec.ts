import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XylvpopupComponent } from './xylvpopup.component';

describe('XylvpopupComponent', () => {
  let component: XylvpopupComponent;
  let fixture: ComponentFixture<XylvpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XylvpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XylvpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
