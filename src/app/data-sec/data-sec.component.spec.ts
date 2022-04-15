import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecComponent } from './data-sec.component';

describe('DataSecComponent', () => {
  let component: DataSecComponent;
  let fixture: ComponentFixture<DataSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
