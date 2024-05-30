import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddjournalPage } from '../addjournal/addjournal';

/**
 * Generated class for the JournalModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journal-modal',
  templateUrl: 'journal-modal.html',
})

export class JournalModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  closeModal() {
    this.navCtrl.push(AddjournalPage);
  }

}
