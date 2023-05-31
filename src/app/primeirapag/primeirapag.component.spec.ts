import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeirapagComponent } from './primeirapag.component';

describe('PrimeirapagComponent', () => {
  let component: PrimeirapagComponent;
  let fixture: ComponentFixture<PrimeirapagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeirapagComponent]
    });
    fixture = TestBed.createComponent(PrimeirapagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
