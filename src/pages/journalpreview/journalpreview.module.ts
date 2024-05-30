import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JournalpreviewPage } from './journalpreview';

@NgModule({
  declarations: [
    JournalpreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(JournalpreviewPage),
  ],
})
export class JournalpreviewPageModule {}
