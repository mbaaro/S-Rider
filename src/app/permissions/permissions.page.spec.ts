import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermissionsPage } from './permissions.page';

describe('PermissionsPage', () => {
  let component: PermissionsPage;
  let fixture: ComponentFixture<PermissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
