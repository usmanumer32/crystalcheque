import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPreviewPage } from './company-preview';

@NgModule({
  declarations: [
    CompanyPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyPreviewPage),
  ],
})
export class CompanyPreviewPageModule {}
