import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinalpagePage } from '../finalpage/finalpage';
import { VendorPage } from '../vendor/vendor';

/**
 * Generated class for the BankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bank',
  templateUrl: 'banksetup.html',
})
export class BankSetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankPage');
  }

  toFinalPage(){
    this.navCtrl.push(FinalpagePage);
  }
  
  toVendorPage(){
    this.navCtrl.push(VendorPage);
  }
}
