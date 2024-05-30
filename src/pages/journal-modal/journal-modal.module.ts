import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournalModalPage } from './journal-modal';

@NgModule({
  declarations: [
    JournalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(JournalModalPage),
  ],
})
export class JournalModalPageModule {}
