import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from '../edituser/edituser.component';
import { ChangeinfoComponent } from '../changeinfo/changeinfo.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { AuthguardService } from '../service/authguard.service';
import { ColumntoggleComponent } from '../columntoggle/columntoggle.component';
import { PlatformModule } from '../platform/platform.module';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'edituser',
        component: EdituserComponent,
        canActivate: [AuthguardService],
        children: [
          { path: 'changeinfo', component: ChangeinfoComponent },
          { path: 'changepassword', component: ChangepasswordComponent },
        ],
      },
      {
        path: 'platform',
        loadChildren: () =>
          import('../platform/platform.module').then((m) => m.PlatformModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
