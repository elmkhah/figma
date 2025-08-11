import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remove } from './remove';

describe('Remove', () => {
  let component: Remove;
  let fixture: ComponentFixture<Remove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remove]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remove);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
