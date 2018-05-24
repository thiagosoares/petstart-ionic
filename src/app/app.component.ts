import { AuthService } from './shared/auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'SigninPage';

  pages: Array<{title: string, component: string}>;

  constructor(
      public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen, 
      public auth:AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'SigninPage' },
      { title: 'Dashboard', component: 'DashboardPage' },
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Logout', component: '' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: {title:string, component:string}) {
    
    switch(page.title) {
      case 'Logout':
      this.auth.logout();
      this.nav.setRoot('SigninPage');  
      break;

      default:
      this.nav.setRoot(page.component);

    }

  }
}