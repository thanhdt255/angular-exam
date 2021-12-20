
import { CampaignCreateComponent } from './../campaign-create/campaign-create.component';
import { AbandonedOrderComponent } from './../abandoned-order/abandoned-order.component';
import { AllorderComponent } from './../allorder/allorder.component';
import { DesignComponent } from './../design/design.component';
import { NewComponent } from './../new/new.component';
import { ClipartComponent } from './../clipart/clipart.component';
import { MockupComponent } from './../mockup/mockup.component';
import { ProductfeedComponent } from './../productfeed/productfeed.component';
import { DetailComponent } from './../detail/detail.component';
import { CampaignComponent } from './../campaign/campaign.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-rounting.module';
import { HomeComponent } from './home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormControl, FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumntoggleComponent } from '../columntoggle/columntoggle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldControl } from '@angular/material/form-field';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import {MatDialogActions, MatDialogClose, MatDialogModule} from '@angular/material/dialog';
import { DialogcontencardComponent } from '../dialogcontencard/dialogcontencard.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    NgSelectModule,
    NgxDatatableModule,
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    CKEditorModule,
  ],
  
})
export class HomeModule {}
