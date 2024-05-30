import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankSetupPage } from '../banksetup/banksetup';
import { CompanyPage } from '../company/company';

/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorPage');
  }

  toBankPage(){
    this.navCtrl.push(BankSetupPage);
  }

  toCompanyPage(){
    this.navCtrl.push(CompanyPage);
  }

}
