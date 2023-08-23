import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentMenuComponent } from './restaurent-menu.component';

describe('RestaurentMenuComponent', () => {
  let component: RestaurentMenuComponent;
  let fixture: ComponentFixture<RestaurentMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurentMenuComponent]
    });
    fixture = TestBed.createComponent(RestaurentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
