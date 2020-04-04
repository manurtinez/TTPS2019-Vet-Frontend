import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEventosComponent } from './historial-eventos.component';

describe('HistorialEventosComponent', () => {
  let component: HistorialEventosComponent;
  let fixture: ComponentFixture<HistorialEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
