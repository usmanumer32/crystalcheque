import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorPage } from '../vendor/vendor';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  toVendorRegistration(){
    this.navCtrl.push(VendorPage);
  }

  toAccountRegistration(){
    this.navCtrl.push(RegisterPage);
  }
}
