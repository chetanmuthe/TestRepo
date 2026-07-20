import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursTravels } from './tours-travels';

describe('ToursTravels', () => {
  let component: ToursTravels;
  let fixture: ComponentFixture<ToursTravels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursTravels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursTravels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
