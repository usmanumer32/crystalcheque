import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyListPage } from '../companylist/companylist';

/**
 * Generated class for the CompanyPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-preview',
  templateUrl: 'company-preview.html',
})
export class CompanyPreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPreviewPage');
  }

  goToCompanyPage(){
    this.navCtrl.push(CompanyListPage);
  }

}
