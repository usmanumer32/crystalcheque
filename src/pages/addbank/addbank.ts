import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BankPage } from '../bank/bank';
import { AddaccountPage } from '../addaccount/addaccount';

/**
 * Generated class for the AddbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbank',
  templateUrl: 'addbank.html',
})
export class AddbankPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbankPage');
  }

  goBack() {
    this.navCtrl.push(BankPage);
  }

  gotoAccount() {
    this.navCtrl.push(AddaccountPage);
  }

}
