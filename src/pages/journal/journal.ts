import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AddjournalPage } from '../addjournal/addjournal';
import { JournalpreviewPage } from '../journalpreview/journalpreview';

@Component({
  selector: 'page-journal',
  templateUrl: 'journal.html'
})

export class JournalPage implements OnInit {

  journals: any[];

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getJournals();
  }

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  getJournals() {
    this.journals = [
      'J001AB',
      'J002BC',
      'J003CD',
      'J004DE',
    ];
  }

  searchJournals(ev: any) {
    this.getJournals();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.journals = this.journals.filter((journal) => {
        return (journal.toLocaleLowerCase().indexOf(serVal.toLocaleLowerCase()) > -1);
      })
    }
  }

  addJournal() {
    this.navCtrl.push(AddjournalPage);
  }

  viewJournal() {
    this.navCtrl.push(JournalpreviewPage);
  }
}

