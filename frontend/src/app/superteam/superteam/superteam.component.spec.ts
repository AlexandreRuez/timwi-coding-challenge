import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperteamComponent } from './superteam.component';

describe('SuperteamComponent', () => {
  let component: SuperteamComponent;
  let fixture: ComponentFixture<SuperteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
