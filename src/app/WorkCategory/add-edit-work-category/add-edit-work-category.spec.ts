import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWorkCategory } from './add-edit-work-category';

describe('AddEditWorkCategory', () => {
  let component: AddEditWorkCategory;
  let fixture: ComponentFixture<AddEditWorkCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditWorkCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditWorkCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
