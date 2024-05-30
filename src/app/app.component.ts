import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, Nav } from 'ionic-angular';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { JournalPage } from '../pages/journal/journal';
import { BankPage } from '../pages/bank/bank';
import { MenuController } from 'ionic-angular';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { VendorsPage } from '../pages/vendors/vendors';
import { UserPage } from '../pages/user/user';

import { CompanyListPage } from '../pages/companylist/companylist';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openHomePage() {
    this.nav.push(DashboardPage);
    this.menuCtrl.close();
  }

  openJournal() {
    this.nav.push(JournalPage);
    this.menuCtrl.close();
  }

  openBank() {
    this.nav.push(BankPage);
    this.menuCtrl.close();
  }

  openAccount() {
    this.nav.push(AccountPage);
    this.menuCtrl.close();
  }

  openVendor() {
    this.nav.push(VendorsPage);
    this.menuCtrl.close();
  }
  openCompany() {
    this.nav.push(CompanyListPage);
    this.menuCtrl.close();
  }

  openUsers(){
    this.nav.push(UserPage);
    this.menuCtrl.close();
  }
}

