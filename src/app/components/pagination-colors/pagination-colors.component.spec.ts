import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationColorsComponent } from './pagination-colors.component';

describe('PaginationColorsComponent', () => {
  let component: PaginationColorsComponent;
  let fixture: ComponentFixture<PaginationColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
