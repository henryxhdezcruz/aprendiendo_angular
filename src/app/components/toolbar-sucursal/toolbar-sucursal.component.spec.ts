import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSucursalComponent } from './toolbar-sucursal.component';

describe('ToolbarSucursalComponent', () => {
  let component: ToolbarSucursalComponent;
  let fixture: ComponentFixture<ToolbarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
