import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorsPage } from '../vendors/vendors';
import { DashboardPage } from '../dashboard/dashboard';
import { AddjournalPage } from '../addjournal/addjournal';

/**
 * Generated class for the FinalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalpage',
  templateUrl: 'finalpage.html',
})
export class FinalpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalpagePage');
  }

  toVendorsPage(){
    this.navCtrl.push(VendorsPage);
  }

  toDashoard(){
    this.navCtrl.push(DashboardPage);
  }

  toJournal(){
    this.navCtrl.push(AddjournalPage);
  }

}
