import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MisspassComponent } from './misspass/misspass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {
  MatDrawer,
  MatDrawerContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { AuthguardService } from './service/authguard.service';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SiginComponent } from './sigin/sigin.component';
import { SigoutComponent } from './sigout/sigout.component';
import { ChangeinfoComponent } from './changeinfo/changeinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { CampaignComponent } from './campaign/campaign.component';
import { DetailComponent } from './detail/detail.component';
import { ProductfeedComponent } from './productfeed/productfeed.component';
import { ClipartComponent } from './clipart/clipart.component';
import { MockupComponent } from './mockup/mockup.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CampaigncreateInfoComponent } from './campaigncreate-info/campaigncreate-info.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigoutComponent,
    MisspassComponent,
    EdituserComponent,
    ChangeinfoComponent,
    ChangepasswordComponent
  
  ],
  imports: [
    JwtModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    FormsModule,
    HomeModule,
    HttpClientModule,
    MatMenuModule,
    NgxDatatableModule,
    NgSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    CKEditorModule
  ],
  providers: [AuthService, AuthguardService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
