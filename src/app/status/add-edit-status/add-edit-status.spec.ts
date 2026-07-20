import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStatus } from './add-edit-status';

describe('AddEditStatus', () => {
  let component: AddEditStatus;
  let fixture: ComponentFixture<AddEditStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
