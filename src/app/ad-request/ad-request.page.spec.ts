import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdRequestPage } from './ad-request.page';

describe('AdRequestPage', () => {
  let component: AdRequestPage;
  let fixture: ComponentFixture<AdRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
