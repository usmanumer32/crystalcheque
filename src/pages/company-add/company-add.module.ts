import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyAddPage } from './company-add';

@NgModule({
  declarations: [
    CompanyAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyAddPage),
  ],
})
export class CompanyAddPageModule {}
