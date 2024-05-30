import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddvendorPage } from '../addvendor/addvendor';
import { VendorpreviewPage } from '../vendorpreview/vendorpreview';

/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendors.html',
})

export class VendorsPage implements OnInit {

  vendors: any[];

  ngOnInit(): void {
    this.menuCtrl.enable(true);
    this.getvendors();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  getvendors() {
    this.vendors = [
      'ABYSINIYA Inc.',
      'E-BIRR TRADING',
      'GIBSON SCHOOL SYSTEMS',
      'YONAS MOBILE',
    ];
  }

  searchVendors(ev: any) {
    this.getvendors();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.vendors = this.vendors.filter((journal) => {
        return (journal.toLocaleLowerCase().indexOf(serVal.toLocaleLowerCase()) > -1);
      })
    }
  }

  addVendor() {
    this.navCtrl.push(AddvendorPage);
  }

  viewVendor() {
   this.navCtrl.push(VendorpreviewPage);
 }
}
