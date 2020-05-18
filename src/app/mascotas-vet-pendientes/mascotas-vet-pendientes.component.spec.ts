import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasVetPendientesComponent } from './mascotas-vet-pendientes.component';

describe('MascotasVetPendientesComponent', () => {
  let component: MascotasVetPendientesComponent;
  let fixture: ComponentFixture<MascotasVetPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasVetPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasVetPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
