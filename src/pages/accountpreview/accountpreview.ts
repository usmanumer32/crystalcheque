import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the AccountpreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountpreview',
  templateUrl: 'accountpreview.html',
})

export class AccountpreviewPage implements OnInit {

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountpreviewPage');
  }

  goBack() {
    this.navCtrl.push(AccountPage);
  }

}
