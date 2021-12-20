import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbandonedOrderComponent } from '../abandoned-order/abandoned-order.component';
import { AllorderComponent } from '../allorder/allorder.component';
import { CampaignCreateComponent } from '../campaign-create/campaign-create.component';
import { CampaignComponent } from '../campaign/campaign.component';
import { CampaigncreateInfoComponent } from '../campaigncreate-info/campaigncreate-info.component';
import { ClipartComponent } from '../clipart/clipart.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DesignComponent } from '../design/design.component';
import { DetailComponent } from '../detail/detail.component';
import { MockupComponent } from '../mockup/mockup.component';
import { NewComponent } from '../new/new.component';
import { ProductfeedComponent } from '../productfeed/productfeed.component';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'campaign',
        component: CampaignComponent,
      },
      { path: 'campaign/design', component: DesignComponent },
      { path: 'campaign/create', component: CampaignCreateComponent },
      { path: 'campaign/create-info', component: CampaigncreateInfoComponent },
      { path: 'campaign/productfeed', component: ProductfeedComponent },
      { path: 'campaign/productfeed/new', component: NewComponent },
      { path: 'campaign/mockup', component: MockupComponent },
      { path: 'campaign/clipart', component: ClipartComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'orders/allorder', component: AllorderComponent },
      { path: 'orders/abandoned-order', component: AbandonedOrderComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
