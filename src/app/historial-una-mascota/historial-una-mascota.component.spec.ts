import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialUnaMascotaComponent } from './historial-una-mascota.component';

describe('HistorialUnaMascotaComponent', () => {
  let component: HistorialUnaMascotaComponent;
  let fixture: ComponentFixture<HistorialUnaMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialUnaMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialUnaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
