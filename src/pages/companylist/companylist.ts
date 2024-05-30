import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
 import { CompanyAddPage } from '../company-add/company-add';
 import { CompanyPreviewPage } from '../company-preview/company-preview';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
/*import { CompanyPreviewPage } from '../../pages/company-preview/company-preview'; */

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'companylist.html',
})
export class CompanyListPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(true);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

   goToCompanyAddPage(){
    this.navCtrl.push(CompanyAddPage);
  }

  goToCompanyPreview(){
    this.navCtrl.push(CompanyPreviewPage);
  }

}
