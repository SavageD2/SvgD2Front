import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponListComponent } from './weapon-list.component';

describe('WeaponListComponent', () => {
  let component: WeaponListComponent;
  let fixture: ComponentFixture<WeaponListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponListComponent]
    });
    fixture = TestBed.createComponent(WeaponListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
