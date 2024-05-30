import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, MenuController, ModalController } from 'ionic-angular';
import { JournalPage } from '../journal/journal';
import { JournalModalPage } from '../journal-modal/journal-modal';

/**
 * Generated class for the AddjournalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addjournal',
  templateUrl: 'addjournal.html',
})
export class AddjournalPage implements OnInit {

  ionViewDidLoad() { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public toast: ToastController, public menuCtrl: MenuController, public modalCtrl: ModalController) { }

  openJournalModal() {
    const modal = this.modalCtrl.create(JournalModalPage);
    modal.present();
  }

  addJournalToast() {
    const toast = this.toast.create({
      message: 'Success:Journal Created',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.push(JournalPage);
  }


}
