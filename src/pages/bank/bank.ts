import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddbankPage } from '../addbank/addbank';
import { BankpreviewPage } from '../bankpreview/bankpreview';

/**
 * Generated class for the BankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html',
})

export class BankPage implements OnInit{

  banks: any[];

  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.getbanks();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  getbanks() {
    this.banks = [
      'OROMIA BANK',
      'AWASH BANK',
      'DASHEN BANK',
      'CBE BANK',
    ];
  }

  searchBanks(ev: any) {
    this.getbanks();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.banks = this.banks.filter((journal) => {
        return (journal.toLocaleLowerCase().indexOf(serVal.toLocaleLowerCase()) > -1);
      })
    }
  }

  addBank() {
    this.navCtrl.push(AddbankPage);
  }

  viewBank() {
    this.navCtrl.push(BankpreviewPage);
  }
}
