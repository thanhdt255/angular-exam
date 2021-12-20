import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumntoggleComponent } from './columntoggle.component';

describe('ColumntoggleComponent', () => {
  let component: ColumntoggleComponent;
  let fixture: ComponentFixture<ColumntoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumntoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumntoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
