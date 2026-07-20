import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootList } from './root-list';

describe('RootList', () => {
  let component: RootList;
  let fixture: ComponentFixture<RootList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
