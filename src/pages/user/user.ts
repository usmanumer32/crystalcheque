import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserEditPage } from '../../pages/user-edit/user-edit';
import { UserAddPage } from '../user-add/user-add'; 
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(true);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  goToUserEditPage(){
    this.navCtrl.push(UserEditPage);
  }

  goToUserAddPage(){
    this.navCtrl.push(UserAddPage);
  } 
}
