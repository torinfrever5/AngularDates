import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSearcherComponent } from './date-searcher.component';

describe('DateSearcherComponent', () => {
  let component: DateSearcherComponent;
  let fixture: ComponentFixture<DateSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
