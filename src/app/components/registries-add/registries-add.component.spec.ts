import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistriesAddComponent } from './registries-add.component';

describe('RegistriesAddComponent', () => {
  let component: RegistriesAddComponent;
  let fixture: ComponentFixture<RegistriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistriesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
