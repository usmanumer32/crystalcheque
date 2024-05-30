import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorpreviewPage } from './vendorpreview';

@NgModule({
  declarations: [
    VendorpreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorpreviewPage),
  ],
})
export class VendorpreviewPageModule {}
