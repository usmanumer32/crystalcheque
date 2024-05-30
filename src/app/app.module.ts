import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { JournalPage } from '../pages/journal/journal';
import { AddjournalPage } from '../pages/addjournal/addjournal';
import { JournalpreviewPage } from '../pages/journalpreview/journalpreview';
import { BankPage } from '../pages/bank/bank';
import { AddbankPage } from '../pages/addbank/addbank';
import { BankpreviewPage } from '../pages/bankpreview/bankpreview';
import { AccountPage } from '../pages/account/account';
import { AddaccountPage } from '../pages/addaccount/addaccount';
import { AccountpreviewPage } from '../pages/accountpreview/accountpreview';
import { VendorsPage } from '../pages/vendors/vendors';
import { AddvendorPage } from '../pages/addvendor/addvendor';
/* import { VendorpreviewPageModule } from '../pages/vendorpreview/vendorpreview.module'; */
import { VendorpreviewPage } from '../pages/vendorpreview/vendorpreview';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CompanyPage } from '../pages/company/company';
import { VendorPage } from '../pages/vendor/vendor';
import { BankSetupPage } from '../pages/banksetup/banksetup';
import { FinalpagePage } from '../pages/finalpage/finalpage';
import { CompanyListPage } from '../pages/companylist/companylist';
import { CompanyAddPage } from '../pages/company-add/company-add';
import { CompanyPreviewPage } from '../pages/company-preview/company-preview';
import { UserPage } from '../pages/user/user';
import { UserAddPage } from '../pages/user-add/user-add';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { CompanyModalPage } from '../pages/edit-company/companieModal';
import { EditPermissionsPage } from '../pages/edit-permissions/edit-permissions';
import { CashaccountPage } from '../pages/cashaccount/cashaccount';
import { JournalModalPage } from '../pages/journal-modal/journal-modal';
import { ApiProvider } from '../pages/providers/api.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    JournalPage,
    AddjournalPage,
    JournalpreviewPage,
    BankPage,
    AddbankPage,
    BankpreviewPage,
    AccountPage,
    AddaccountPage,
    AccountpreviewPage,
    VendorsPage,
    AddvendorPage,
    VendorpreviewPage,
    LoginPage,
    RegisterPage,
    CompanyPage,
    VendorPage,
    BankSetupPage,
    FinalpagePage,
    CompanyListPage,
    CompanyAddPage,
    CompanyPreviewPage,
    UserPage,
    UserAddPage,
    UserEditPage,
    EditCompanyPage,
    CompanyModalPage,
    EditPermissionsPage,
    CashaccountPage,
    JournalModalPage
  ],

  imports: [
    BrowserModule,HttpModule,CommonModule,FormsModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    JournalPage,
    AddjournalPage,
    JournalpreviewPage,
    BankPage,
    AddbankPage,
    BankpreviewPage,
    AccountPage,
    AddaccountPage,
    AccountpreviewPage,
    VendorsPage,
    AddvendorPage,
    VendorpreviewPage,
    LoginPage,
    RegisterPage,
    CompanyPage,
    VendorPage,
    BankSetupPage,
    FinalpagePage,
    CompanyListPage,
    CompanyAddPage,
    CompanyPreviewPage,
    UserPage,
    UserAddPage,
    UserEditPage,
    EditCompanyPage,
    CompanyModalPage,
    EditPermissionsPage,
    CashaccountPage,
    JournalModalPage
  ],

  providers: [
    ApiProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
