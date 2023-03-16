import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaviComponent } from './gavi.component';

describe('GaviComponent', () => {
  let component: GaviComponent;
  let fixture: ComponentFixture<GaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
