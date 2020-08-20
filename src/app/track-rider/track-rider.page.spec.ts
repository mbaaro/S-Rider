import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackRiderPage } from './track-rider.page';

describe('TrackRiderPage', () => {
  let component: TrackRiderPage;
  let fixture: ComponentFixture<TrackRiderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRiderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackRiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
