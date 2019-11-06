import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EComprasComponent } from './ecompras.component';

describe('EComprasComponent', () => {
  let component: EComprasComponent;
  let fixture: ComponentFixture<EComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
