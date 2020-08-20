import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderProfilePage } from './rider-profile.page';

describe('RiderProfilePage', () => {
  let component: RiderProfilePage;
  let fixture: ComponentFixture<RiderProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
