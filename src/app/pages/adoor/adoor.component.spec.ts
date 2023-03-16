import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoorComponent } from './adoor.component';

describe('AdoorComponent', () => {
  let component: AdoorComponent;
  let fixture: ComponentFixture<AdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
