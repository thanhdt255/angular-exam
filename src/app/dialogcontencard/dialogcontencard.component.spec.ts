import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcontencardComponent } from './dialogcontencard.component';

describe('DialogcontencardComponent', () => {
  let component: DialogcontencardComponent;
  let fixture: ComponentFixture<DialogcontencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcontencardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcontencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
