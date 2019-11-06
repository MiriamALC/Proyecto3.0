import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDComprasComponent } from './edcompras.component';

describe('EDComprasComponent', () => {
  let component: EDComprasComponent;
  let fixture: ComponentFixture<EDComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
