import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBComponent } from './component.p.component';

describe('ComponentBComponent', () => {
  let component: ComponentBComponent;
  let fixture: ComponentFixture<ComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
