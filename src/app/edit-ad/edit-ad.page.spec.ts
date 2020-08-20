import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAdPage } from './edit-ad.page';

describe('EditAdPage', () => {
  let component: EditAdPage;
  let fixture: ComponentFixture<EditAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
