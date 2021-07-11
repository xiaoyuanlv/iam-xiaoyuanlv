import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XspaceComponent } from './xspace.component';

describe('XspaceComponent', () => {
  let component: XspaceComponent;
  let fixture: ComponentFixture<XspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
