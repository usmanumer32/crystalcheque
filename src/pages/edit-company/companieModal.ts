import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'company-modal',
  templateUrl: 'companyModal.html',
})
export class CompanyModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCompanyPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
