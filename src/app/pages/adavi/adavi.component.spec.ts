import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaviComponent } from './adavi.component';

describe('AdaviComponent', () => {
  let component: AdaviComponent;
  let fixture: ComponentFixture<AdaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
