import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashaccountPage } from './cashaccount';

@NgModule({
  declarations: [
    CashaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CashaccountPage),
  ],
})
export class CashaccountPageModule {}
