import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyListPage } from '../companylist/companylist';

@NgModule({
  declarations: [
    CompanyListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyListPage),
  ],
})
export class CompanyPageModule {}
