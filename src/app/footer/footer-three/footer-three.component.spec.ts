import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterThreeComponent } from './footer-three.component';

describe('FooterThreeComponent', () => {
  let component: FooterThreeComponent;
  let fixture: ComponentFixture<FooterThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterThreeComponent]
    });
    fixture = TestBed.createComponent(FooterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
