import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarVeterinariosComponent } from './habilitar-veterinarios.component';

describe('HabilitarVeterinariosComponent', () => {
  let component: HabilitarVeterinariosComponent;
  let fixture: ComponentFixture<HabilitarVeterinariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilitarVeterinariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
