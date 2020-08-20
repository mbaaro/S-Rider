import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home-page',
      icon: 'Home'
    },
    {
      title: 'Get Service',
      url: '/service-request',
      icon: 'map'
    },
    {
      title: 'Offer Service',
      url: '/view-requests',
      icon: 'bicycle'
    },
    {
      title: 'My business',
      url: '/ad-request',
      icon: 'briefcase'
    },
 {
      title: 'Help',
      url: '/app-help',
      icon: 'help'
    }  /* ,
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }*/
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //const path = window.location.pathname.split('home-page/')[0];
const path='home-page';
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
