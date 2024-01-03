import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentZComponent } from './component.z.component';

describe('ComponentZComponent', () => {
  let component: ComponentZComponent;
  let fixture: ComponentFixture<ComponentZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
