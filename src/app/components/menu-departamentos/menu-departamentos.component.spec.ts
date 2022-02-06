import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDepartamentosComponent } from './menu-departamentos.component';

describe('MenuDepartamentosComponent', () => {
  let component: MenuDepartamentosComponent;
  let fixture: ComponentFixture<MenuDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
