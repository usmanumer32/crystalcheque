import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { JournalPage } from '../journal/journal';

/**
 * Generated class for the JournalpreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journalpreview',
  templateUrl: 'journalpreview.html',
})

export class JournalpreviewPage implements OnInit{

  ngOnInit(): void {
    this.menuCtrl.enable(false);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JournalpreviewPage');
  }

  goBack() {
    this.navCtrl.push(JournalPage);
  }

}
