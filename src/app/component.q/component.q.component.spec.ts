import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentQComponent } from './component.q.component';

describe('ComponentQComponent', () => {
  let component: ComponentQComponent;
  let fixture: ComponentFixture<ComponentQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
