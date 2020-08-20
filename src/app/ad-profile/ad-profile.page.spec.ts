import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdProfilePage } from './ad-profile.page';

describe('AdProfilePage', () => {
  let component: AdProfilePage;
  let fixture: ComponentFixture<AdProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
