import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { VendorsPage } from '../vendors/vendors';

/**
 * Generated class for the VendorpreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendorpreview',
  templateUrl: 'vendorpreview.html',
})

export class VendorpreviewPage implements OnInit {

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  goBack() {
    this.navCtrl.push(VendorsPage);
  }

}
