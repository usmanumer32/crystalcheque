import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AccountpreviewPage } from '../accountpreview/accountpreview';

import { CashaccountPage } from '../cashaccount/cashaccount';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export class AccountPage implements OnInit{

  accounts: any[];

  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.getaccounts();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  getaccounts() {
    this.accounts = [
      'ET AIRLINES',
      'ET MARITIME',
      'GSS GROUP',
      'APPLIEDLINE LTD',
    ];
  }

  searchAccounts(ev: any) {
    this.getaccounts();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.accounts = this.accounts.filter((journal) => {
        return (journal.toLocaleLowerCase().indexOf(serVal.toLocaleLowerCase()) > -1);
      })
    }
  }

  viewAccount() {
    this.navCtrl.push(AccountpreviewPage);
  }

  addAccount() {
    this.navCtrl.push(CashaccountPage);
  }

}
