import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { UserEditCompanyPage } from '../user-edit-company/user-edit-company';
import { UserEditPermissionPage } from '../user-edit-permission/user-edit-permission'; */
import { EditCompanyPage } from '../edit-company/edit-company';
import { EditPermissionsPage } from '../edit-permissions/edit-permissions';



/**
 * Generated class for the UserEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEditPage');
  }

  goToUserPage(){
    this.navCtrl.pop()
  }

   goToUserEditCompanyPage(){
    this.navCtrl.push(EditCompanyPage);
  }

  goToUserEditPermissionPage(){
    this.navCtrl.push(EditPermissionsPage);
  }

}
