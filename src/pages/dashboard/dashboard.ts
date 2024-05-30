import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { BankPage } from '../bank/bank';
import { JournalPage } from '../journal/journal';
import { VendorsPage } from '../vendors/vendors';
import { CompanyListPage } from '../companylist/companylist';
import { UserPage } from '../user/user';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(true);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openJournal() {
    this.navCtrl.push(JournalPage);
  }

  openBank() {
    this.navCtrl.push(BankPage);
  }

  openAccount() {
    this.navCtrl.push(AccountPage);
  }

  openVendor() {
    this.navCtrl.push(VendorsPage);
  }

  openCompanyList() {
    this.navCtrl.push(CompanyListPage);
  }

  openUser() {
    this.navCtrl.push(UserPage);
  }
}
