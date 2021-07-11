import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopInsiderLayoutComponent } from './laptop-insider-layout.component';

describe('LaptopInsiderLayoutComponent', () => {
  let component: LaptopInsiderLayoutComponent;
  let fixture: ComponentFixture<LaptopInsiderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopInsiderLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopInsiderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
