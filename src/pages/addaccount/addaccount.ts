import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { AccountPage } from '../account/account';

/**
 * Generated class for the AddaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addaccount',
  templateUrl: 'addaccount.html',
})

export class AddaccountPage implements OnInit {

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddaccountPage');
  }

  goBack() {
    this.navCtrl.push(AccountPage);
  }

  submitAccount() {
    this.addAccountToast();
    this.goBack();
  }

  addAccountToast() {
    const toast = this.toast.create({
      message: 'Success:Account Added',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
