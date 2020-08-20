import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TownPickerPage } from './town-picker.page';

describe('TownPickerPage', () => {
  let component: TownPickerPage;
  let fixture: ComponentFixture<TownPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownPickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TownPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
