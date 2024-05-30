import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankpreviewPage } from './bankpreview';

@NgModule({
  declarations: [
    BankpreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(BankpreviewPage),
  ],
})
export class BankpreviewPageModule {}
