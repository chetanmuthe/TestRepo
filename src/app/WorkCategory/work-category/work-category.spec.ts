import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCategory } from './work-category';

describe('WorkCategory', () => {
  let component: WorkCategory;
  let fixture: ComponentFixture<WorkCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
