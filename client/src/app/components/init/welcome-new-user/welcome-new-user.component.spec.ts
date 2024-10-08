import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNewUserComponent } from './welcome-new-user.component';

describe('WelcomeNewUserComponent', () => {
  let component: WelcomeNewUserComponent;
  let fixture: ComponentFixture<WelcomeNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeNewUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
