import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfeedComponent } from './productfeed.component';

describe('ProductfeedComponent', () => {
  let component: ProductfeedComponent;
  let fixture: ComponentFixture<ProductfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
