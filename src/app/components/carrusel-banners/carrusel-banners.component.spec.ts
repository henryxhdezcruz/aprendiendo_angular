import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselBannersComponent } from './carrusel-banners.component';

describe('CarruselBannersComponent', () => {
  let component: CarruselBannersComponent;
  let fixture: ComponentFixture<CarruselBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
