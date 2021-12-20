import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigncreateInfoComponent } from './campaigncreate-info.component';

describe('CampaigncreateInfoComponent', () => {
  let component: CampaigncreateInfoComponent;
  let fixture: ComponentFixture<CampaigncreateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaigncreateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigncreateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
