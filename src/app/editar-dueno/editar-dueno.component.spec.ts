import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDuenoComponent } from './editar-dueno.component';

describe('EditarDuenoComponent', () => {
  let component: EditarDuenoComponent;
  let fixture: ComponentFixture<EditarDuenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDuenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
