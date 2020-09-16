import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistriesListComponent } from './registries-list.component';

describe('RegistriesListComponent', () => {
  let component: RegistriesListComponent;
  let fixture: ComponentFixture<RegistriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
