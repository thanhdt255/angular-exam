import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigoutComponent } from './sigout/sigout.component';
import { HomeComponent } from './home/home.component';
import { MisspassComponent } from './misspass/misspass.component';

const routes: Routes = [
  
  { path: 'sigin', component: SiginComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'misspass', component: MisspassComponent },
  { path: 'sigout', component: SigoutComponent },
  { path: 'Order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
