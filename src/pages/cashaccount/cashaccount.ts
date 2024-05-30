import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AccountPage } from '../account/account';

/**
 * Generated class for the CashaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cashaccount',
  templateUrl: 'cashaccount.html',
})

export class CashaccountPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashaccountPage');
  }

  goBack () {
    this.navCtrl.push(AccountPage);
  }

}
