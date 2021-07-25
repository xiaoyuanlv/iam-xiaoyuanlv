import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppgalleryComponent } from './appgallery.component';

describe('AppgalleryComponent', () => {
  let component: AppgalleryComponent;
  let fixture: ComponentFixture<AppgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
