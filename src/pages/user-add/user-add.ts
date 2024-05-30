import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


/**
 * Generated class for the UserAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-add',
  templateUrl: 'user-add.html',
})
export class UserAddPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
  public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAddPage');
  }

  goToUserPage(){
    this.navCtrl.pop();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

}
