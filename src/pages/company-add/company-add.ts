import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CompanyListPage } from '../companylist/companylist';

/**
 * Generated class for the CompanyAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-add',
  templateUrl: 'company-add.html',
})
export class CompanyAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyAddPage');
  }

  goToCompanyPage(){
    this.navCtrl.pop();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Company was added successfully',
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

}
