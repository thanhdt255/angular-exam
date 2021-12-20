import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { CampaigncreateInfoComponent } from './../campaigncreate-info/campaigncreate-info.component';
import { CampaignCreateComponent } from './../campaign-create/campaign-create.component';
import { DialogcontencardComponent } from './../dialogcontencard/dialogcontencard.component';
import { AbandonedOrderComponent } from './../abandoned-order/abandoned-order.component';
import { AllorderComponent } from './../allorder/allorder.component';
import { DesignComponent } from './../design/design.component';
import { NewComponent } from './../new/new.component';
import { MockupComponent } from './../mockup/mockup.component';
import { ClipartComponent } from './../clipart/clipart.component';
import { ProductfeedComponent } from './../productfeed/productfeed.component';
import { DetailComponent } from './../detail/detail.component';
import { CampaignComponent } from './../campaign/campaign.component';
import { DashboardComponent } from './../dashboard/dashboard.component';


import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from '../edituser/edituser.component';
import { ChangeinfoComponent } from '../changeinfo/changeinfo.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { AuthguardService } from '../service/authguard.service';
import { ColumntoggleComponent } from '../columntoggle/columntoggle.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';


@NgModule({
  declarations: [
    PlatformComponent,
    DashboardComponent,
    ColumntoggleComponent,
    CampaignComponent,
    DetailComponent,
    ProductfeedComponent,
    MockupComponent,
    ClipartComponent,
    NewComponent,
    DesignComponent,
    AllorderComponent,
    AbandonedOrderComponent,
    DialogcontencardComponent,
    CampaignCreateComponent,
    CampaigncreateInfoComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    NgSelectModule,
    NgxDatatableModule,
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    CKEditorModule,
    NgSelectModule,
    NgOptionHighlightModule,
    
  ]
})
export class PlatformModule { }
