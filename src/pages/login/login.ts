import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MenuController } from 'ionic-angular';
/* import { VendorsPage } from '../vendors/vendors'; */
/* import { EditPermissionsPage } from '../edit-permissions/edit-permissions'; */
/* import { EditCompanyPage } from '../edit-company/edit-company'; */

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  constructor(public navCtrl: NavController,public menuCtrl : MenuController) {

  }

  ngOnInit(){
    this.menuCtrl.enable(false);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  /* toVendorsPage(){
    this.navCtrl.push(VendorsPage);
  }

  toEditPermissionsPage(){
    this.navCtrl.push(EditPermissionsPage);
  }

  toEditCompanyPage(){
    this.navCtrl.push(EditCompanyPage);
  } */
}
