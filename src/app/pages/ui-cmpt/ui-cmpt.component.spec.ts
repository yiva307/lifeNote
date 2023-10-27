import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCmptComponent } from './ui-cmpt.component';

describe('UiCmptComponent', () => {
  let component: UiCmptComponent;
  let fixture: ComponentFixture<UiCmptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiCmptComponent]
    });
    fixture = TestBed.createComponent(UiCmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
