import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditToDo } from './add-edit-to-do';

describe('AddEditToDo', () => {
  let component: AddEditToDo;
  let fixture: ComponentFixture<AddEditToDo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditToDo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditToDo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
