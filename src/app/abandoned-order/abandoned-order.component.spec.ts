import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandonedOrderComponent } from './abandoned-order.component';

describe('AbandonedOrderComponent', () => {
  let component: AbandonedOrderComponent;
  let fixture: ComponentFixture<AbandonedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandonedOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbandonedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
