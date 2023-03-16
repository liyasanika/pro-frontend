import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoohComponent } from './nooh.component';

describe('NoohComponent', () => {
  let component: NoohComponent;
  let fixture: ComponentFixture<NoohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoohComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
